import gql from 'graphql-tag';

export const GET_CATEGORIES = gql`
    query CategoryPage($after: String) {
        categories(pageSize: 8, after: $after) {
            hasMore
            cursor
            categories {
                id
                name
                imageUrl
            }
        }
    }
`;

export const GET_CATEGORY_PRODUCTS = gql`
    query CategoryProducts($id: ID!) {
        categoryProducts(id: $id) {
            cursor
            hasMore
            products {
                id
                name
                description
                images
                dimensions
                price
                mainImage @client
            }
        }
    }
`;