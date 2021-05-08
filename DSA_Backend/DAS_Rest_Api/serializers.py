from rest_framework import serializers
from .models import Blog, Contact, UserProfile


#Model-Serializer(auto field generation,default create and update)
class BlogModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'


class ContactModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'