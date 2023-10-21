from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.json_util import dumps, loads 

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('wanderworld-db', username='user', password='user', authSource='wander_world')
db = client['wander_world']

@app.route("/")
def index():
    """
    :return: html rendered in home page of api
    """
    try:
        return "<h1>WanderWorld API</h1>"
    except Exception as e:
        return str(e)
    
@app.route('/users', methods=['GET'])
def get_users():
    user_collection = db['users']
    users = user_collection.find()
    list_cur = list(users) 
    json_data = dumps(list_cur, indent = 2)  
    return jsonify(json_data)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)