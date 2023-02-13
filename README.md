# Serverless Framework AWS NodeJS Example

The primary goal of this test application is to study the basic methods of the Sequelize library with MySQL. The application allows for the registration of heroes and is built using a Node.js ORM (Sequelize) that makes it easy to access and manipulate relational databases. The application serves as a complete API with all HTTP methods for heroes and is powered by the MySQL database and Serverless architecture. With Sequelize, developers can write JavaScript code to manage their database tables, columns, and records in an organized and efficient manner, making it easier to maintain the database and keep the codebase clean.

## Usage

### Deployment

In order to test the example, you need to run the following command:

```
$ serverless offline
```

After running offline, you should see output similar to:

```bash
Starting Offline at stage dev (us-east-1)

Offline [http for lambda] listening on http://localhost:3002
Function names exposed for local invocation by aws-sdk:
           * insert: sequelize-mysql-dev-insert
           * get: sequelize-mysql-dev-get
           * delete: sequelize-mysql-dev-delete
           * put: sequelize-mysql-dev-put

   ┌────────────────────────────────────────────────────────────────────────────┐
   │                                                                            │
   │   POST   | http://localhost:3000/dev/heroes                                │
   │   POST   | http://localhost:3000/2015-03-31/functions/insert/invocations   │
   │   GET    | http://localhost:3000/dev/heroes                                │
   │   POST   | http://localhost:3000/2015-03-31/functions/get/invocations      │
   │   DELETE | http://localhost:3000/dev/heroes/{id}                           │
   │   POST   | http://localhost:3000/2015-03-31/functions/delete/invocations   │
   │   PUT    | http://localhost:3000/dev/heroes/{id}                           │
   │   POST   | http://localhost:3000/2015-03-31/functions/put/invocations      │
   │                                                                            │
   └────────────────────────────────────────────────────────────────────────────┘

Server ready: http://localhost:3000 🚀

```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
sls invoke local -f insert
```
This will register a new hero on your database, after this you can test all REST endpoints.

Which should result in response similar to the following:

```json
{
{
    "statusCode": 200,
    "body": "{\"id\":38,\"name\":\"Francesco\",\"power\":\"Chief Brand Supervisor\",\"updatedAt\":\"2023-02-13T22:21:54.825Z\",\"createdAt\":\"2023-02-13T22:21:54.825Z\"}"
}
}
```
