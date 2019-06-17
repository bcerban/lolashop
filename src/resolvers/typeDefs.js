import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean! 
  }

  extend type User {
    avatarUrl: String!
  }

  extend type Product {
    mainImage: String
  }
`;

export default typeDefs;