from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("posts/<str:title>/", views.posts, name="posts"),
    path("comments/<int:post>/<int:comment>/", views.comments, name="comments"),
]