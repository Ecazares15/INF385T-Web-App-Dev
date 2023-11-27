from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient

# Configure Flask
app = Flask(__name__)
CORS(app)

# Connect to MongoDB
uri = "mongodb+srv://jasminewang:1234@inf385tcluster.b6esmhr.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri)
db = client['WanderWorld']


@app.route("/")
def index():
    """
    :return: html rendered in home page of api
    """
    try:
        return '<h1>WanderWorld API</h1>'
    except Exception as e:
        return str(e)


@app.route('/users', methods=['GET'])
def get_users():
    """
    :return: json of all users in database or error
    """
    user_collection = db['users']
    users = user_collection.find({}, {'_id': False})
    return jsonify(list(users))


@app.route('/posts', methods=['GET', 'POST'])
def posts():
    post_collection = db['posts']
    if request.method == 'GET':
        print(post_collection)
        posts = post_collection.find({}, {'_id': False})
        return jsonify(list(posts))
    elif request.method == 'POST':
        post = request.json
        post_collection.insert_one(post)
        return jsonify({'status': 'success'})


@app.route('/threads', methods=['GET', 'POST'])
def threads():
    thread_collection = db['threads']
    if request.method == 'GET':
        print(thread_collection)
        threadList = thread_collection.find({}, {'_id': False})
        return jsonify(list(threadList))
    elif request.method == 'POST':
        thread = request.json
        result = thread_collection.insert_one(thread)
        return jsonify({'status': 'success'})


if __name__ == "__main__":
    # Run Flask
    app.run(host='0.0.0.0', debug=True, port=5000)
