# Generated by Django 4.2.10 on 2024-07-20 11:18

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='todo',
            name='sub_title',
            field=models.CharField(default='', max_length=30),
        ),
        migrations.AlterField(
            model_name='todo',
            name='title',
            field=models.CharField(default='', max_length=30),
        ),
    ]
