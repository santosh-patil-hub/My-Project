# Generated by Django 4.2.10 on 2024-07-22 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0005_rename_sub_title_todo_desc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='desc',
            field=models.CharField(max_length=256),
        ),
    ]
