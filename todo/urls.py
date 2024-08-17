from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:id>/', views.index, name='index_with_id'),
    path('delete_todo/<int:id>/', views.delete_todo, name='delete_todo'),
    path('todolist/',views.todolist,name='todolist'),
    path('tododetails/<int:pk>/',views.tododetails,name='tododetails')
]
