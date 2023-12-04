from bson import ObjectId
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
thread_collection = db['threads']
user_collection = db['users']

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

@app.route('/users/<uid>', methods=['GET'])
def get_user(uid):
    user = user_collection.find_one({'uid': uid})
    if user:
        user['_id'] = str(user['_id'])
    return jsonify(user)

@app.route('/users/<uid>', methods=['DELETE'])
def delete_user(uid):
    result = user_collection.delete_one({'uid': uid})
    if result.deleted_count > 0:
        return jsonify({'status': 'success', 'message': 'User deleted successfully.'}), 200
    else:
        return jsonify({'status': 'error', 'message': 'No user found with the given UID.'}), 404

@app.route('/users', methods=['POST'])
def add_user():
    """
    Add a new user to the database.
    :return: JSON response indicating success or failure.
    """
    try:
        user_data = request.json
        result = user_collection.insert_one(user_data)
        new_user = user_collection.find_one({"_id": result.inserted_id}, {'password': 0})
        if new_user:
            new_user['_id'] = str(new_user['_id'])
        return jsonify({'status': 'success', 'user': new_user}), 201
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/posts', methods=['GET', 'POST'])
def posts():
    post_collection = db['posts']
    if request.method == 'GET':
        print(post_collection)
        posts = post_collection.find({}, {'_id': False}).sort('_id', -1)
        return jsonify(list(posts))
    elif request.method == 'POST':
        post = request.json
        post_collection.insert_one(post)
        return jsonify({'status': 'success'})


@app.route('/threads', methods=['GET'])
def show_threads():
    result = thread_collection.find({})
    thread_list = []
    for thread in result:
        thread['_id'] = str(thread['_id'])
        thread_list.append(thread)
    return jsonify(thread_list)


@app.route('/threads', methods=['POST'])
def add_threads():
    thread = request.json
    del thread['_id']
    result = thread_collection.insert_one(thread)
    new_thread = thread_collection.find_one({"_id": result.inserted_id})
    print(new_thread)
    if new_thread:
        new_thread['_id'] = str(new_thread['_id'])
    return jsonify({'status': 'success', 'thread': new_thread})


@app.route('/threads/<thread_id>/like', methods=['POST'])
def like_thread(thread_id):
    obj_id = ObjectId(thread_id)
    thread_collection.update_one({'_id': obj_id}, {'$inc': {'likes': 1}})
    updated_thread = thread_collection.find_one({'_id': obj_id})
    return jsonify({'likes': updated_thread.get('likes', 0)})


@app.route('/threads/<thread_id>/dislike', methods=['POST'])
def dislike_thread(thread_id):
    obj_id = ObjectId(thread_id)
    thread_collection.update_one({'_id': obj_id}, {'$inc': {'dislikes': 1}})
    updated_thread = thread_collection.find_one({'_id': obj_id})
    return jsonify({'dislikes': updated_thread.get('dislikes', 0)})


@app.route('/threads/<thread_id>/comment', methods=['POST'])
def comment_thread(thread_id):
    obj_id = ObjectId(thread_id)
    comment = request.json
    result = thread_collection.update_one(
        {'_id': obj_id},
        {'$push': {'comments': comment}}
    )
    if result.modified_count:
        return jsonify({'status': 'success', 'comment': comment})

if __name__ == "__main__":
    # Run Flask
    app.run(host='0.0.0.0', port=5000, debug=True)
