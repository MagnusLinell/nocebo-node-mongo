# Express Node Mongo

Handles creation of mongo connections.

## Requirements

Needs harmony to be set when used:

    node --harmony

## Setup

Options:

    url: String | URL to connect to MongoDB
    collection: String | MongoDB Collection
    schema: String | MongoDB Schema

Example:

    {
      "url": "mongodb://localhost:27017/test",
      "collection": "houses",
      "schema": {
        "_id": "String",
        "name": "String",
        "createdAt": "Date",
        "type": {
          "type": "String",
          "enum": ["apartment","house","unknown"]
        }
      }
    }

## Test

To run unit tests:

    npm test
