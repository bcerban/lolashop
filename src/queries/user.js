import gql from 'graphql-tag';

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const ME = gql`
  query User {
    me {
      id
      email
      avatarUrl @client
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!) {
    login(email: $email) {
      id
      email
      login
    }
  }
`;