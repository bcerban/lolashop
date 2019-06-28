import React from 'react';
import MainNavigation from './components/navigator';
import { ApolloProvider } from 'react-apollo';
import { Provider as PaperProvider } from 'react-native-paper';
import Client from './apollo/client';
import Theme from './styles/theme';


const Shop = () => (
    <ApolloProvider client={Client}>
        <PaperProvider theme={Theme}>
            <MainNavigation />
        </PaperProvider>
    </ApolloProvider>
);

export default Shop;