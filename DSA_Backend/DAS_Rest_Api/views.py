from .models import Blog, Contact, UserProfile
import math
from .serializers import BlogModelSerializer, ContactModelSerializer
import requests
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET','POST'])
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
    
    if request.method == 'POST':
        query=request.data.get('search')
        blogtitle=Blog.objects.filter(title__icontains=query)
        blogintro=Blog.objects.filter(short_desc__icontains=query)
        blogs=blogtitle.union(blogintro)
        if page is not None:
            print(page)
            no_of_posts = 5
            blogs=blogs[(page-1)*no_of_posts:page*no_of_posts]
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



import pandas as pd
@api_view(['GET','POST'])
def Flood_Events(request):
    Flood_no = []
    year_lebel = []
    positions = []
    Flood = pd.read_csv("static/Flood.csv",encoding="latin-1")
    if request.method=='POST':
        country_filter = request.data.get('country')
        print(country_filter)
        if country_filter!='all':
            Flood = Flood[Flood['Country']==str(country_filter)]
    index = Flood.index
    country = Flood['Country']
    longi = Flood['Centroid X']
    lat = Flood['Centroid Y']
    for i in index:
        a=[country[i],float(lat[i]),float(longi[i])]
        positions.append(a)
    count = Flood['Year'].value_counts()
    count = count.sort_index()
    country = Flood['Country'].unique()
    country.sort()
    for i in count:
        Flood_no.append(i)
    for j in count.index:
        year_lebel.append(j)
    deaths,deaths_years,dead_count,dead_label = deathgraph(Flood['Dead'],Flood['Year'],Flood['Death'])
    print(dead_count)
    print(dead_label)
    Displaced,Displaced_years,Displaced_count,Displaced_label = Injuredgraph(Flood['Displaced'],Flood['Year'],Flood['Displace'])
    context = {'positions':positions,'Country':country,'data':Flood_no,'lebel':year_lebel,'deaths':deaths,'deaths_years':deaths_years,'dead_count':dead_count,'dead_label':dead_label,
        'Displaced':Displaced,'Displaced_years':Displaced_years,'Displaced_label':Displaced_label,'Displaced_count':Displaced_count}
    return Response(context)


@api_view(['GET','POST'])
def Earthquake_Events(request):
    earthquake_no = []
    year_lebel = []
    earthquake = pd.read_excel("static/Earthquake.xlsx")
    positions = []
    if request.method=='POST':
        country_filter = request.data.get('country')
        print(country_filter)
        if country_filter!='all':
            earthquake = earthquake[earthquake['Country']==str(country_filter)]
    index = earthquake.index
    print(len(earthquake))
    country = earthquake['Country']
    lat = earthquake['Latitude']
    longi = earthquake['Longitude']
    for i in index:
        a=[country[i],float(lat[i]),float(longi[i])]
        positions.append(a)
    count = earthquake['Year'].value_counts()
    country = earthquake['Country'].unique()
    country.sort()
    count = count.sort_index()
    for i in count:
        earthquake_no.append(i)
    for j in count.index:
        year_lebel.append(j)
    deaths,deaths_years,dead_count,dead_label = deathgraph(earthquake['Total Deaths'],earthquake['Year'],earthquake['Dead'])
    Injured,Injured_years,Injured_count,Injured_label = Injuredgraph(earthquake['No Injured'],earthquake['Year'],earthquake['Injured'])
    Affected,Affected_years,Affected_count,Affected_label = Affectedgraph(earthquake['Total Affected'],earthquake['Year'],earthquake['Affected'])
    context = {'positions':positions,'Country':country,'data':earthquake_no,'lebel':year_lebel,'deaths':deaths,'deaths_years':deaths_years,'dead_count':dead_count,'dead_label':dead_label,
        'Injured':Injured,'Injured_years':Injured_years,'Injured_label':Injured_label,'Injured_count':Injured_count,'Affected':Affected,'Affected_years':Affected_years,
        'Affected_count':Affected_count,'Affected_label':Affected_label}
    return Response(context)




def deathgraph(dead,year,dead_label):
    deaths = []
    years = []
    label = []
    label_count = []
    dead_label = dead_label.value_counts()
    for i in dead_label:
        label_count.append(i)
    for i in dead_label.index:
        label.append(i)
    index = dead[dead>100000].index
    year = year.drop(index,axis=0)
    dead = dead[dead<100000]
    for j in dead:
        deaths.append(j)
    for j in year:
        years.append(j)
    return deaths,years,label_count,label
def Injuredgraph(injureds,year,Injured_label):
    injured = []
    years = []
    label = []
    label_count = []
    Injured_label = Injured_label.value_counts()
    for i in Injured_label:
        label_count.append(i)
    for i in Injured_label.index:
        label.append(i)
    index = injureds[injureds>100000].index
    year = year.drop(index,axis=0)
    injureds = injureds[injureds<100000]
    for j in injureds:
        injured.append(j)
    for j in year:
        years.append(j)
    return injured,years,label_count,label
def Affectedgraph(Affecteds,year,Affected_label):
    Affected = []
    years = []
    label = []
    label_count = []
    Affected_label = Affected_label.value_counts()
    for i in Affected_label:
        label_count.append(i)
    for i in Affected_label.index:
        label.append(i)
    index = Affecteds[Affecteds>100000].index
    year = year.drop(index,axis=0)
    Affecteds = Affecteds[Affecteds<100000]
    for j in Affecteds:
        Affected.append(j)
    for j in year:
        years.append(j)
    return Affected,years,label_count,label


@api_view(['GET','POST'])
def Earthquake_Deaths(request):
    Type,Asia,Africa,Americas,Europe,Oceania=0,0,0,0,0,0
    if request.method=='POST':
        Earthquake_Type= request.data.get('Earthquake_Type')
        Continent= request.data.get('Continent')
        Magnitude= request.data.get('Magnitude')
        Latitude= request.data.get('Latitude')
        Longitude= request.data.get('Longitude')
        if Earthquake_Type=='Ground_Movement':
            Type=1
        if Continent=='Africa':
            Africa=1
        elif Continent=='Asia':
            Asia=1
        elif Continent=='Americas':
            Americas=1
        elif Continent=='Europe':
            Europe=1
        else:
            Oceania=1
        print(Continent)
        Dead = Earthquake_Dead_Predictions(Type, Africa, Americas, Asia, Europe, Oceania, Magnitude, Latitude, Longitude)
        range,value = death_range(Dead[0])
        result = {"Estimation":Dead[0],"Lat":Latitude,"Long":Longitude,"chart":{"range":range,"value":value}}
        return Response(result)
    res = {"msg":"Something is wrong!"}
    return Response(res)


@api_view(['GET','POST'])
def Earthquake_Injured(request):
    Type,Asia,Africa,Americas,Europe,Oceania=0,0,0,0,0,0
    if request.method=='POST':
        print('This is post')
        Earthquake_Type= request.POST['Earthquake_Type']
        Continent= request.POST['Continent']
        Magnitude= request.POST['Magnitude']
        Latitude= request.POST['Latitude']
        Longitude= request.POST['Longitude']
        if Earthquake_Type=='Ground_Movement':
            Type=1
        if Continent=='Africa':
            Africa=1
        elif Continent=='Asia':
            Asia=1
        elif Continent=='Americas':
            Americas=1
        elif Continent=='Europe':
            Europe=1
        else:
            Oceania=1
        print(Continent)
        Injured = Earthquake_Injured_Predictions(Type, Africa, Americas, Asia, Europe, Oceania, Magnitude, Latitude, Longitude)
        range,value = Injured_range(Injured[0])
        result = {"Estimation":Injured[0],"Lat":Latitude,"Long":Longitude,"chart":{"range":range,"value":value}}
        return Response(result)
    res = {"msg":"Something is wrong!"}
    return Response(res)


@api_view(['GET','POST'])
def Earthquake_Affected(request):
    if request.method=='POST':
        print('This is post')
        #Earthquake_Type= request.POST['Earthquake_Type']
        #Continent= request.POST['Continent']
        Magnitude= request.POST['Magnitude']
        Latitude= request.POST['Latitude']
        Longitude= request.POST['Longitude']
        Affected = Earthquake_Affected_Predictions(Magnitude, Latitude, Longitude)
        range,value = Affected_range(Affected[0])
        result = {"Estimation":Affected[0],"Lat":Latitude,"Long":Longitude,"chart":{"range":range,"value":value}}
        return Response(result)
    res = {"msg":"Something is wrong!"}
    return Response(res)


import pickle
def Earthquake_Dead_Predictions(Type, Africa, Americas, Asia, Europe, Oceania, Magnitude, Latitude, Longitude):
    model = pickle.load(open('Earthquake_Dead_RF.sav', 'rb'))

    prediction = model.predict([
        [Type, Africa, Americas, Asia, Europe, Oceania, Magnitude, Latitude, Longitude]
    ])
    return prediction
def Earthquake_Injured_Predictions(Type, Africa, Americas, Asia, Europe, Oceania, Magnitude, Latitude, Longitude):
    model = pickle.load(open('Earthquake_Injured_SVM.sav', 'rb'))

    prediction = model.predict([
        [Type, Africa, Americas, Asia, Europe, Oceania, Magnitude, Latitude, Longitude]
    ])
    return prediction
def Earthquake_Affected_Predictions(Magnitude, Latitude, Longitude):
    model = pickle.load(open('Earthquake_Affected_RF.sav', 'rb'))

    prediction = model.predict([
        [Magnitude, Latitude, Longitude]
    ])
    return prediction


def Flood_Deaths(request):
    if request.method=='POST':
        print('This is post')
        severity= request.data.get('Severity')
        affected= request.data.get('Affected Area')
        magnitude= request.data.get('Magnitude')
        c_x= request.data.get('Centroid X')
        c_y= request.data.get('Centroid Y')
        Dead = Flood_Dead_Predictions(severity,affected,magnitude,c_x,c_y)
        range,value = death_range(Dead[0])
        result = {"Estimation":Dead[0],"Lat":c_x,"Long":c_y,"chart":{"range":range,"value":value}}
        return Response(result)
    res = {"msg":"Something is wrong!"}
    return Response(res)

def Flood_Displaced(request):
    if request.method=='POST':
        print('This is post')
        severity= request.data.get('Severity')
        affected= request.data.get('Affected Area')
        magnitude= request.data.get('Magnitude')
        c_x= request.data.get('Centroid X')
        c_y= request.data.get('Centroid Y')
        Displaced = Flood_Displaced_Predictions(severity,affected,magnitude,c_x,c_y)
        range,value = death_range(Affected_range[0])
        result = {"Estimation":Displaced[0],"Lat":c_x,"Long":c_y,"chart":{"range":range,"value":value}}
        return Response(result)
    res = {"msg":"Something is wrong!"}
    return Response(res)

def Flood_Dead_Predictions(severity,affected,magnitude,c_x,c_y):
    model = pickle.load(open('Flood_Dead_RF.sav', 'rb'))

    prediction = model.predict([
        [severity,affected,magnitude,c_x,c_y]
    ])
    return prediction
def Flood_Displaced_Predictions(severity,affected,magnitude,c_x,c_y):
    model = pickle.load(open('Flood_Displaced_RF.sav', 'rb'))

    prediction = model.predict([
        [severity,affected,magnitude,c_x,c_y]
    ])
    return prediction


#get range by estmated result
def death_range(result):
    if result == "Low":
        range = "0 to 10"
        value = 10
    elif result == "Medium":
        range = "0 to 30"
        value = 30
    elif result == "High":
        range = "0 to 50"
        value = 50
    elif result=="Very High":
        range = "0 to 100"
        value = 100
    else:
        range = "more than 100"
        value = 200
    return range,value

def Injured_range(result):
    if result == "Low":
        range = "0 to 20"
        value = 20
    elif result == "Medium":
        range = "0 to 50"
        value = 50
    elif result == "High":
        range = "0 to 100"
        value = 100
    elif result=="Very High":
        range = "0 to 200"
        value = 200
    else:
        range = "more than 200"
        value = 300
    return range,value

def Affected_range(result):
    if result == "Low":
        range = "0 to 50"
        value = 50
    elif result == "Medium":
        range = "0 to 100"
        value = 100
    elif result == "High":
        range = "0 to 200"
        value = 200
    elif result=="Very High":
        range = "0 to 300"
        value = 300
    else:
        range = "more than 300"
        value = 400
    return range,value