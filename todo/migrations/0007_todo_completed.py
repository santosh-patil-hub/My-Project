# Generated by Django 4.2.10 on 2024-07-23 05:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0006_alter_todo_desc'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='completed',
            field=models.BooleanField(default=False),
        ),
    ]
