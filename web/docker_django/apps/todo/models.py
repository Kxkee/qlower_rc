from django.db import models


class Article(models.Model):
    topic = models.TextField(blank=False, null=False)
    body = models.TextField(blank=False, null=False)
    author = models.TextField(blank=False, null=False)
    datetime_posted = models.DateField(auto_now=True)
    date_updated = models.DateField(auto_now=True)