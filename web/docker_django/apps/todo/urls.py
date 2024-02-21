from django.urls import re_path, path
from . import views
from .views import ArticleGet, ArticleUpdate, ArticleCreate

urlpatterns = [
    path('articles/', views.ArticleGet.as_view(), name="articles"),
    path('article/<int:id>/',ArticleUpdate.as_view(), name='article-update'),
    path('articlep/', views.ArticleCreate.as_view(), name="article-create"),

]
    