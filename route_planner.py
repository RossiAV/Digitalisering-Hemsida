from flask import Flask, request
from geopy.geocoders import Nominatim
from flask_cors import CORS
import redis
import json
import subprocess


app = Flask(__name__)
CORS(app, supports_credentials=True)
redis_server = redis.Redis(host='localhost', port=6379)

geolocator = Nominatim(user_agent="my_request")
region = ", Lund, Skåne, Sweden"

@app.route('/planner', methods=['POST'])
def route_planner():
    Addresses =  json.loads(request.data.decode())
    FromAddress = Addresses['faddr']
    ToAddress = Addresses['taddr']
    
    current_location = (float(redis_server.get('longitude')), float(redis_server.get('latitude')))
    from_location = geolocator.geocode(FromAddress + region)
    to_location = geolocator.geocode(ToAddress + region)
    
    if from_location is None:
        message = 'Departure address not found, please input a correct address'
    elif to_location is None:
        message = 'Destination address not found, please input a correct address'
    else:
        message = 'Get addresses! Start moving'
        subprocess.Popen(["python3", "../pi/pi_controller.py", '--clong', str(current_location[0]), '--clat', str(current_location[1]),
                                                 '--flong', str(from_location.longitude), '--flat', str(from_location.latitude),
                                                 '--tlong', str(to_location.longitude), '--tlat', str(to_location.latitude)
                        ])
    return message

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port='5002')
