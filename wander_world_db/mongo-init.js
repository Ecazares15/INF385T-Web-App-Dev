// Create user
print("Creating user");
db = db.getSiblingDB("admin");

db.auth("root", "root");

db = db.getSiblingDB("wander_world");

db.createUser({
  user: "user",
  pwd: "user",
  roles: [{ role: "readWrite", db: "wander_world"}],
});

db.createCollection("users");

db.users.insertOne({
    "username": "admin",
    "password": "admin",
    "email": "test@email.com",
    "firstName": "admin",
    "lastName": "admin",
    "role": "admin"
});

users = db.getUsers();
print(users);

// Provide feedback
print("Database initialized");



