# Serverless Framework AWS NodeJS Example

The primary goal of this test application is to study the basic methods of the Sequelize library with MySQL. The application allows for the registration of heroes and is built using a Node.js ORM (Sequelize) that makes it easy to access and manipulate relational databases. The application serves as a complete API with all HTTP methods for heroes and is powered by the MySQL database and Serverless architecture. With Sequelize, developers can write JavaScript code to manage their database tables, columns, and records in an organized and efficient manner, making it easier to maintain the database and keep the codebase clean.

## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

After running deploy, you should see output similar to:

```bash
Deploying aws-node-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-project-dev (112s)

functions:
  hello: aws-node-project-dev-hello (1.5 kB)
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
serverless invoke --function hello
```

Which should result in response similar to the following:

```json
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": {}\n}"
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```
