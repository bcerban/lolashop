import React, { Component } from 'react';
import MainNavigation from './components/navigator';
import { resolvers, typeDefs } from './resolvers';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'http://localhost:4000/',
    }),
    typeDefs: typeDefs,
    resolvers: resolvers
  });

const Shop = () => (
    <ApolloProvider client={client}>
        <MainNavigation />
    </ApolloProvider>
);

export default Shop;