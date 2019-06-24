import React from 'react';
import MainNavigation from './components/navigator';
import { ApolloProvider } from 'react-apollo';
import Client from './apollo/client';


const Shop = () => (
    <ApolloProvider client={Client}>
        <MainNavigation />
    </ApolloProvider>
);

export default Shop;