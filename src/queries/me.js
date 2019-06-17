import gql from 'graphql-tag';

export const ME = gql`
  query User {
    me {
      id
      email
      avatarUrl @client
    }
  }
`;