import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

// get all type definitions and merge them
const typesArray = fileLoader(path.join(__dirname, './typeDefs'));
export const typeDefs = mergeTypes(typesArray, {
  all: true
});

// get all resolvers and merge them
const resolversArray = fileLoader(path.join(__dirname, './resolvers'));
export const resolvers = mergeResolvers(resolversArray);
