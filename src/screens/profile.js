import React, {Component} from 'react';
import {Text} from 'react-native';
import { Query, ApolloConsumer, Mutation } from 'react-apollo';
import Layout from '../components/layout';
import LoginForm from '../components/profile/login-form';
import { IS_LOGGED_IN } from '../queries/isLoggedIn';
import { LOGIN_USER } from '../queries/login';

const Profile = () => (
    <Query query={IS_LOGGED_IN}>
        {({ data }) => {
            if (!data || !data.isLoggedIn) {
                return (
                    <ApolloConsumer>
                        {client => (
                            <Mutation 
                                mutation={LOGIN_USER}
                                onCompleted={({ login }) => {
                                    client.writeData({ data: { isLoggedIn: true, token: login }});
                                }}
                                >
                                {(login, { loading, error }) => {
                                    return (
                                        <Layout>
                                            <Text style={{
                                                backgroundColor: 'red',
                                                color: 'white',
                                                width: '80%'
                                            }}>
                                                {error ? `Failed to log in. Error was ${error.message}` : ''}
                                            </Text>
                                            <LoginForm login={login} />
                                        </Layout>
                                    );
                                }}
                            </Mutation>
                        )}
                    </ApolloConsumer>
                );
            } else {
                return <Layout><Text>Hi! This is the profile view. The user is LOGGED IN.</Text></Layout>
            }
        }}
    </Query>
);

export default Profile;