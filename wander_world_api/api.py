from flask import Flask, jsonify
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

@app.route('/posts', methods=['GET'])
def get_posts():
    """
    :return: json of all posts in database or error
    """
    post_collection = db['posts']
    posts = post_collection.find({}, {'_id': False})
    try:
        return jsonify(list(posts))
    except Exception as e:
        return str(e)

@app.route('/posts/add', methods=['POST'])
def add_post(request):
    """
    :param request: json of new post
    :return: json of status of post insertion
    """
    post_collection = db['posts']
    try:
        post_collection.insert_one(request.data)
        return jsonify({'status': 'success'})
    except Exception as e:
        return jsonify({'status': 'failed', 'error': str(e)})

if __name__ == "__main__":
    # Run Flask
    app.run(host='0.0.0.0', debug=True)