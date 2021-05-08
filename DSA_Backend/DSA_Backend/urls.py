from django.contrib import admin
from django.urls import path
from DAS_Rest_Api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('bloghome/<int:page>', views.blog),
    path('blogpost/<str:slug>', views.blogpost),
    path('news/<int:page>', views.news),
    path('floodLive/<int:page>', views.floodLive),
    path('earthquakeLive/<int:page>', views.earthquakeLive),
    path('weather/<str:location>', views.weather),
    path('contact/', views.contact),
]
