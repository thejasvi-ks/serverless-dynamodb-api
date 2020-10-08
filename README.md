
# Serverless NodeAPI with DynamoDB.

Simple Node API built using AWS API Gateway, Lambda, Layers and DynamoDB built with Serverless framework.

Demo serverless application using AWS API Gateway, Lambda, Layers and DynamoDB built with Serverless framework

# Prerequisites

Node.js v10.x or later.

## Installation

Clone this project,

```
# npm install
# npm install -g serverless
```
	To test locally, install this too as a dev dependancy.
	# npm install serverless-offline --save-dev


# Configuration
You need to configure your AWS credentials. You can find the information needed below;
https://serverless.com/framework/docs/providers/aws/guide/credentials/

After obtaining the Key and Secret to access AWS programmatically, run the below command to configure from your development machine.
```
# serverless config credentials --provider aws --key xxxxxxxxxxxxxx --secret xxxxxxxxxxxxxx ('sls' is short for 'serverless' )
```
Create a copy of NodeJS starter template and move into the directory.

```
## sls create -t aws-nodejs -p serverless-dynamodb-api && cd serverless-dynamodb-api
```
## Usage

This code base has two end points CreateMovie which is used to create a Movie Record & ListMovies , which is used to List out all the Movies from the database.

# Adding message to DynamoDB table
```
$ sls invoke -f createMovie --data '{"name":"Pulp Fiction"}'
```

# Scanning DynamoDB table for messages
```
$ sls invoke -f listMovies
```
# To test locally using serverless offline plugin,
```
# serverless offline start
```
You can use any of the API development tools to test it out. (Postman Or Insomnia).

## Deployment
```
$ sls deploy
```
