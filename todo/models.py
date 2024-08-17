from django.db import models
from django.utils import timezone

class TODO(models.Model):
    title = models.CharField(max_length=30, default='')
    desc = models.CharField(max_length=256, blank=True, null=True ,default='')  # Make sure it can be blank
    date = models.DateTimeField(default=timezone.now)

    class Meta:
        db_table = 'TODO'
        verbose_name = 'TODO_LIST'
        verbose_name_plural = 'TODO_LIST'

    def __str__(self):
        return self.title
