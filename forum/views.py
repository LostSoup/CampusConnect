from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the forum index.")
def posts(request, title):
    return HttpResponse("Hello, world. You're at the forum posts. %s" % title)
def comments(request, post, comment):
    return HttpResponse("Hello, world. You're at the forum comments. %s %s" % (post, comment))