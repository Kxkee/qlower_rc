from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, UpdateAPIView, CreateAPIView
from .models import Article
from .serializers import ArticleSerializer

class ArticleGet(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleUpdate(UpdateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'id'


class ArticleCreate(CreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer