
const { ApolloServer, gql } = require('apollo-server');


const students = 
    [
        {
            "id":1,
            "name": "Sahal",
            "email":"s.m.sahal@gmal.com",
            "age":24,
            "height": 5
        },
        {
            "id":2,
            "name": "Ganjga",
            "email":"ganja@gmal.com",
            "age":25,
            "height": 6
        },
        {
            "id":3,
            "name": "fahem",
            "email":"fahem@gmal.com",
            "age":26,
            "height": 8
        }
    ]


const resolvers = {
    Query: {
      students: () => students,
    },
  };


const typeDefs = gql`
  type Student {
    name: String
    email: String
    age: Int
    id: Int,
    height: Int
  }

  type Query {
    students: [Student]
  }
`;


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});