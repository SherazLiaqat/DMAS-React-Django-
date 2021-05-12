import requests
import json
#to get all blogs
def all_blogs(page):
    URL = "http://127.0.0.1:8000/bloghome/"+str(page)+""
    headers = {'Content-Type': 'application/json'}
    r = requests.get(url = URL, headers = headers)
    data = r.json()
    #print(data)
    #to print only titles
    for i in range(len(data)):
        print(data[i]['title'])
#all_blogs(2)

#to get single blog
def single_blog(slug):
    URL = "http://127.0.0.1:8000/blogpost/"+str(slug)+""
    headers = {'Content-Type': 'application/json'}
    r = requests.get(url = URL, headers = headers)
    data = r.json()
    print(data)
#single_blog('ML')


def search_blog(slug):
    URL = "http://127.0.0.1:8000/bloghome/1"
    headers = {'Content-Type': 'application/json'}
    data = {"search":slug}
    json_data = json.dumps(data)
    r = requests.post(url = URL, headers = headers, data = json_data)
    data = r.json()
    print(data)
search_blog("ML")

#to get news
def news(page):
    URL = "http://127.0.0.1:8000/news/"+str(page)+""
    headers = {'Content-Type': 'application/json'}
    r = requests.get(url = URL, headers = headers)
    data = r.json()
    #print(data)
    for i in range(len(data['News'])):
        print(data['News'][i]['headline'])
        print(data['News'][i]['date'])

#to get flood live news
def floodlive(page):
    URL = "http://127.0.0.1:8000/floodLive/"+str(page)+""
    headers = {'Content-Type': 'application/json'}
    r = requests.get(url = URL, headers = headers)
    data = r.json()
    #print(data)
    for i in range(len(data['News'])):
        print(data['News'][i]['headline'])
        print(data['News'][i]['date'])

#to get Earthquake live news
def earthquakelive(page):
    URL = "http://127.0.0.1:8000/earthquakeLive/"+str(page)+""
    headers = {'Content-Type': 'application/json'}
    r = requests.get(url = URL, headers = headers)
    data = r.json()
    print(data)
    """
    for i in range(len(data['News'])):
        print(data['News'][i]['headline'])
        print(data['News'][i]['date'])
    """
#earthquakelive(1)

#to get weather forecast
def weather():
    URL = "http://127.0.0.1:8000/weather/sialkot"
    headers = {'Content-Type': 'application/json'}
    r = requests.get(url = URL, headers = headers)
    data = r.json()
    print(data)


#to send contact data 
def contact():
    URL = "http://127.0.0.1:8000/contact/"
    data = {"name":"Akhlaq","email":"akhlaq@gmail.com","phone":"03333333333","desc":"hello world"}
    json_data = json.dumps(data)
    headers = {'Content-Type': 'application/json'}
    r = requests.post(url = URL, headers=headers, data = json_data)
    #response msg
    data = r.json()
    print(data)
#contact()
