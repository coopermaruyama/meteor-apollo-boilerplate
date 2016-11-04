import { Random } from 'meteor/random';

const typeDefs = [`
type Email {
  address: String
  verified: Boolean
}

type User {
  emails: [Email]
  username: String
  randomString: String
  _id: String
}

type Query {
  user(id: String!): User
}

schema {
  query: Query
}
`];

const resolvers = {
  Query: {
    user(root, args, context) {
      // Only return the current user, for security
      if (context.userId === args.id) {
        return context.user;
      }
    },
  },
  User: {
    emails: ({emails}) => emails,
    randomString: () => Random.id(),
  }
}

export default { typeDefs, resolvers };
