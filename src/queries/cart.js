import gql from 'graphql-tag';

export const MY_CART = gql`
  query UserCart {
    me {
      id
      cart {
        id
        sku
        name
        description
        price
        images
        mainImage @client
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