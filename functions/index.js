const functions = require("firebase-functions");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require('./definitions/products');
const resolvers = require('./resolvers/products');

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: "/", cors: true });
exports.graphql = functions.https.onRequest(app);