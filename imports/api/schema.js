import app from '/imports/app';

export const typeDefs = [
  ...app.schema.typeDefs
];

export const resolvers = {
  ...app.schema.resolvers
};
