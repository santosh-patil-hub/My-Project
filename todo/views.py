from django.shortcuts import render, redirect, get_object_or_404,HttpResponse
from django.contrib import messages
from .models import TODO
from .forms import TodoForm
from django.utils import timezone
from  .serializers import TodoSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view


def index(request, id=None):
    todo_list = TODO.objects.order_by("-date")
    if id:
        todo = get_object_or_404(TODO, id=id)
        form = TodoForm(instance=todo)
    else:
        form = TodoForm()
    
    if request.method == 'POST':
        if id:
            todo = get_object_or_404(TODO, id=id)
            form = TodoForm(request.POST, instance=todo)
        else:
            form = TodoForm(request.POST)
        
        if form.is_valid():
            todo = form.save(commit=False)
            todo.date = timezone.now()  # Set the date to current timezone-aware datetime
            todo.save()
            if id:
                messages.success(request, 'Todo updated successfully!')
            else:
                messages.success(request, 'Todo created successfully!')
            return redirect('index')
        else:
            # Collect form errors and send them to the template
            errors = form.errors.as_data()
            for field, error_list in errors.items():
                for error in error_list:
                    messages.error(request, error.message)
    
    return render(request, 'auth/index.html', {'form': form, 'todo_list': todo_list})

# def delete_todo(request, id):
#     todo = get_object_or_404(TODO, id=id)
#     if request.method == "POST":
#         todo.delete()
#         message.danger(request,"Todo deleted successfully")
#         return redirect('index')
def delete_todo(request, id):
    todo = get_object_or_404(TODO, id=id)
    if request.method == "POST":
        todo.delete()
        messages.success(request, "Todo deleted successfully")
        return redirect('index')
    else:
        messages.error(request, "Invalid request method")
        return redirect('index')

@api_view(['GET', 'POST'])
def todolist(request):
    if request.method == 'GET':
        todo_data = TODO.objects.all()
        serializer = TodoSerializer(todo_data, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TodoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def tododetails(request, pk):
    try:
        todo_data = TODO.objects.get(pk=pk)
    except TODO.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TodoSerializer(todo_data)
        return Response(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = TodoSerializer(todo_data, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        todo_data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
