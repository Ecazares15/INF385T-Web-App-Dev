db = db.getSiblingDB("admin");

db.auth("root", "root");

/* Create Databases */
db = db.getSiblingDB("wander_world");

/* Add Users */
db.createUser({
  user: "user",
  pwd: "user",
  roles: [{ role: "readWrite", db: "wander_world"}],
});

/* Create Collections */
db.createCollection("users");

db.createCollection("posts");

/* Insert Test Data */
db.users.insertOne({
  username: "admin",
  password: "admin",
  email: "test@email.com",
  firstName: "admin",
  lastName: "admin",
  role: "admin",
});

print("Database initialized");
