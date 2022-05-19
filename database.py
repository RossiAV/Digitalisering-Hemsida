from flask import Flask, request
from flask_cors import CORS
import redis

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.secret_key = 'dljsaklqk24e21cjn!Ew@@dsa5'

# change this to connect to your redis server
# ===============================================
redis_server = redis.Redis(host='localhost', port=6379)
# ===============================================

redis_server.set('longitude', 13.21008)
redis_server.set('latitude', 55.71106)

@app.route('/drone', methods=['POST'])
def drone():
    drone_location = request.get_json()
    longitude = drone_location['longitude']
    latitude = drone_location['latitude']
    redis_server.set('longitude', longitude)
    redis_server.set('latitude', latitude)
    return 'Get data'

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port='5001')
