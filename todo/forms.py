from django import forms
from .models import TODO

class TodoForm(forms.ModelForm):
    class Meta:
        model = TODO
        fields = '__all__'  # Use '__all__' to include all fields from the model