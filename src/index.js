/* eslint-disable no-console */
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { resolvers, typeDefs } from './graphql/schema';

import utils from './utils';

require('dotenv').config();

const app = express();

const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers,
  context: () => ({
    utils
  }),
  introspection: true,
  playground: true
});

server.applyMiddleware({
  app,
  cors: {
    origin: [process.env.FRONTEND_URL, 'https://aylabyuk.github.io/countries/#/'],
    credentials: true
  }
}); // app is from an existing express app

app.listen(
  {
    port: process.env.PORT
  },
  () => console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
);
