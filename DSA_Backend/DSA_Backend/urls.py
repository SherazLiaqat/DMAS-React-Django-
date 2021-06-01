from django.contrib import admin
from django.urls import path
from DAS_Rest_Api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('Earthquake_Deaths/', views.Earthquake_Deaths),
    path('Earthquake_Injured/', views.Earthquake_Injured),
    path('Earthquake_Affected/', views.Earthquake_Affected),
    path('Flood_Deaths/', views.Flood_Deaths),
    path('Flood_Displaced/', views.Flood_Displaced),
    path('bloghome/<int:page>', views.blog),
    path('blogpost/<str:slug>', views.blogpost),
    path('news/<int:page>', views.news),
    path('floodLive/<int:page>', views.floodLive),
    path('earthquakeLive/<int:page>', views.earthquakeLive),
    path('weather/<str:location>', views.weather),
    path('contact/', views.contact),
    path('Flood_Events/', views.Flood_Events),
    path('Earthquake_Events/', views.Earthquake_Events),
]
