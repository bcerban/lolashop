import React from 'react';
import { getToken } from './util/session';
import MainNavigation from './components/navigator';
import resolvers from './resolvers/resolvers';
import typeDefs from './resolvers/typeDefs';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const customFetch = async (uri, options) => {
  const token = await getToken();
  console.log('Token ' + JSON.stringify(token));
  options.headers.Authorization = token;
  return fetch(uri, options);
};

const client = new ApolloClient({
    cache: cache,
    link: new HttpLink({
      uri: 'http://localhost:4000/',
      fetch: customFetch
    }),
    typeDefs,
    resolvers
  });

cache.writeData({ data: { isLoggedIn: !!getToken() }});

const Shop = () => (
    <ApolloProvider client={client}>
        <MainNavigation />
    </ApolloProvider>
);

export default Shop;