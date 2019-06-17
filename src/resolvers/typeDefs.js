import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean! @client
  }

  extend type User {
    avatarUrl: String! @client
  }

  extend type Product {
    mainImage: String
  }
`;

export default typeDefs;