import gql from 'graphql-tag';

export const SEARCH = gql`
    query search($keyword: String!) {
        search(keyword: $keyword) {
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

export const FEATURED = gql`
    query featuredProducts {
        featuredProducts {
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