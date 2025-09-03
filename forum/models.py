from django.db import models

# Create your models here.
class Post(models.Model):
    bodyText = models.CharField(max_length=2000)
    createdAt = models.DateTimeField(auto_now_add=True)
    titleText = models.CharField(max_length=200)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)

    def __str__(self):
        return self.titleText

class Comment(models.Model):
    bodyText = models.CharField(max_length=1000)
    createdAt = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)

    def __str__(self):
        return self.bodyText[:50]