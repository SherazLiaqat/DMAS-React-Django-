from .models import Blog, Contact, UserProfile
import math
from .serializers import BlogModelSerializer, ContactModelSerializer
import requests
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.
@api_view(['GET'])
def blog(request, page):
    if request.method == 'GET':
        if page is not None:
            print(page)
            no_of_posts = 5
            blogs = Blog.objects.all()
            blogs = blogs[(page-1)*no_of_posts: page*no_of_posts]
            serializer = BlogModelSerializer(blogs, many = True)
            return Response(serializer.data)
        data = {'msg':'No more blogs!'}
        return Response(data)

@api_view(['GET'])
def blogpost(request, slug):
    if request.method == 'GET':
        blog = Blog.objects.filter(slug=slug)
        serializer = BlogModelSerializer(blog, many = True)
        return Response(serializer.data)


import itertools
@api_view(['GET'])
def news(request, page):
    next = str((page-1)*5)
    response = requests.get(url = "https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&offset="+next+"&profile=full&preset=latest&slim=1")
    news = response.json()
    data = list()
    for i in range(len(news)):
        headline = str(news['data'][i]['fields']['name'])
        discription = news['data'][i]['fields']['description-html']
        country = news['data'][i]['fields']['country'][0]['name']
        date = str(news['data'][i]['fields']['date']['created'])
        date = date.split("T")
        date = date[0]
        types = str(news['data'][i]['fields']['type'][0]['name'])
        status = str(news['data'][i]['fields']['status'])
        data.append({'headline':headline,'description':discription, 'country':country, 'date':date,'types':types,'status':status})
    news = {'News':data}
    return Response(news)
    
@api_view(['GET'])
def floodLive(request, page):
    next = str((page-1)*5)
    response = requests.get(url = "https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&profile=full&preset=latest&slim=1&query[value]=Flood&query[operator]=AND&offset="+next+"&limit=5")
    news = response.json()
    data = list()
    for i in range(5):
        type = str(news['data'][i]['fields']['type'][0]['name'])
        headline = str(news['data'][i]['fields']['name'])
        country = news['data'][i]['fields']['country'][0]['name']
        d = str(news['data'][i]['fields']['date']['created']).split('T')
        date = d[0]
        lat = float(news['data'][i]['fields']['country'][0]['location']['lat'])
        long = float(news['data'][i]['fields']['country'][0]['location']['lon'])
        data.append({'headline':headline,'type':type,'date':date,'country':country[0],'lat':lat,'long':long})
    news = {'News':data}
    return Response(news)


from datetime import datetime
@api_view(['GET'])
def earthquakeLive(request, page):
    response = requests.get(url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=4")
    news = response.json()
    data = list()
    #deaths = []
    #injured = []
    #affected = []
    #len(data['features']) for complete retreive data
    next = (page-1)*5
    for i in range(next,next+5):
        title = news['features'][i]['properties']['title']
        try:
            p = news['features'][i]['properties']['place'].split('of')
        except:
            p = news['features'][i]['properties']['place'].split('-')
        place = p[-1]
        #time formatting
        time_strap = str(news['features'][i]['properties']['time'])
        time_strap = int(time_strap[:10])
        time_strap = datetime.fromtimestamp(time_strap)
        date_ = time_strap.strftime("%x")
        time_ = time_strap.strftime("%X")
        time_strap = date_+" "+time_
        time = time_strap
        #mag = news['features'][i]['properties']['mag']
        #url = news['features'][i]['properties']['url']
        #alert = news['features'][i]['properties']['alert']
        #magType = news['features'][i]['properties']['magType']
        coordinates = news['features'][i]['geometry']['coordinates']
        data.append({'headline':title,'country':place,'data':time,'lat':coordinates[1],'long':coordinates[0]})
        """
        if data['features'][0]['properties']['tsunami']==0:
            type = 1
        else:
            type = 0
        deaths.append(Earthquake_Dead_Predictions(type, 0, 0, 1, 0, 0, mag[0],coordinates[i][1], coordinates[i][0]))
        injured.append(Earthquake_Injured_Predictions(type, 0, 0, 1, 0, 0, mag[0],coordinates[i][1], coordinates[i][0]))
        affected.append(Earthquake_Affected_Predictions(mag[0],coordinates[i][1], coordinates[i][0]))
        """
    news = {'News':data}
    return Response(news)

@api_view(['GET'])
def weather(request,location): 
    city = location
    url = "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=6c562dc1286349aeb43143853211303&q="+ city +"&mca=no&fx=no&num_of_days=2&alerts=yes&format=json"
    response = requests.request("GET", url)
    weather = response.json()
    try:
        alert = weather['data']['alerts']['alert'][0]['headline']
    except:
        alert = "No Alert"
    data = { 
        "location": str(weather['data']['request'][0]['query']), 
        "time": str(weather['data']['current_condition'][0]['observation_time']), 
        "temp": str(weather['data']['current_condition'][0]['temp_C']) + '°C', 
        "condition": str(weather['data']['current_condition'][0]['weatherDesc'][0]['value']), 
        "humidity": str(weather['data']['current_condition'][0]['humidity']),
        "icon": str(weather['data']['current_condition'][0]['weatherIconUrl'][0]['value']),
        "alert": alert
    }
    print(data)
    weather = {'Weather':data}
    return Response(weather)


#to bypass csrf token
from django.views.decorators.csrf import csrf_exempt
@api_view(['POST'])
@csrf_exempt
def contact(request):
    if request.method=='POST':
        json_data = request.data
        serrializer = ContactModelSerializer(data = json_data)
        if serrializer.is_valid():
            serrializer.save()
            #give response
            res = {'msg':'Data Saved!'}
            return Response(res)
        return Response(serrializer.errors)