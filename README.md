# Wander World

Wander World is a social media app specialized for people who love traveling and the outdoors. This app allows users to share their travel experiences, connect with other travelers, and discover new destinations.

## Getting Started

To run the UI:

```
cd wander_world_ui
npm install
```

Once you have the packages installed locally run:

```
npm start
```

To run the API and database, navigate to the source directory and run the following command:

```
docker-compose up --build
```

You can use the `-d` flag to detach the container. To stop the API and database, run the following command:

```
docker-compose down -v
```

This will bring the containers down and delete any volumes created by them.

### Accessing the UI
The UI can be accessed using `localhost` on post `3000`.

### Accessing the Database

The database can be accessed using valid credentials and is exposed to `localhost` on port `27017`. You can use a MongoDB client such as `mongo` to connect to the database.

### Accessing the API

The API can be accessed through `localhost` on port `8080`. You can use a web browser or a tool such as `curl` or `Postman` to interact with the API.

## API Endpoints

The following endpoints are available in the API:

- `GET /users`: Returns a list of all users in the database.

## License

Wander World is not licensed.