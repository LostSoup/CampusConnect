from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'posts', views.PostView)

urlpatterns = [
    path("admin/", admin.site.urls)
]