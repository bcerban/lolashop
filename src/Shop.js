import React from 'react';
import { getToken } from './util/session';
import MainNavigation from './components/navigator';
import resolvers from './resolvers/resolvers';
import typeDefs from './resolvers/typeDefs';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const getCache = () => {
  const cache = new InMemoryCache();
  getToken().then(token => {  
    cache.writeData({ data: { isLoggedIn: !!token }});
  });

  return cache;
}

const customFetch = async (uri, options) => {
  const token = await getToken();
  options.headers.Authorization = token;
  return fetch(uri, options);
};

const client = new ApolloClient({
  cache: getCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/',
    fetch: customFetch
  }),
  typeDefs,
  resolvers
});

const Shop = () => (
    <ApolloProvider client={client}>
        <MainNavigation />
    </ApolloProvider>
);

export default Shop;