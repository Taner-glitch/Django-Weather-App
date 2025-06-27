import requests
from rest_framework.views import APIView
from rest_framework.response import Response
import os
from dotenv import load_dotenv

load_dotenv()  

class WeatherAPIView(APIView):
    def get(self, request):
        city = request.GET.get("city", "")
        api_key = os.getenv("OPENWEATHER_API_KEY") 
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
        response = requests.get(url)
        data = response.json()
        return Response(data)
