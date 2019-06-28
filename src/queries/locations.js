import gql from 'graphql-tag';

export const GET_LOCATIONS = gql`
    query Locations {
        locations {
            id
            name
            longitude
            latitude
            street
            city
            country
        }
    }
`;