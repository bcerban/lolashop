import gql from 'graphql-tag';

export const MY_CART = gql`
  query UserCart {
    me {
      id
      cart {
        id
        name
        description
        price
        images
        mainImage @client
      }
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation AddToCart($id: ID!) {
    addToCart(productIds: [$id]) {
      success
      message
      products {
        id
      }
    }
  }
`;

export const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($id: ID!) {
    removeFromCart(productIds: [$id]) {
      success
      message
      products {
        id
      }
    }
  }
`;