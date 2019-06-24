import { getToken } from '../util/session';
import resolvers from './resolvers';
import typeDefs from './type-defs';
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

const Client = new ApolloClient({
    cache: getCache(),
    link: new HttpLink({
        uri: 'http://localhost:4000/',
        fetch: customFetch
    }),
    typeDefs,
    resolvers
});

export default Client;