import React from 'react';
import { Text } from 'react-native';
import { Query, ApolloConsumer, Mutation } from 'react-apollo';
import { clearSession, saveToken } from '../util/session';
import { Layout } from '../containers';
import LoginForm from '../components/profile/login-form';
import LoggedIn from '../components/profile/logged-in';
import { IS_LOGGED_IN } from '../queries/isLoggedIn';
import { LOGIN_USER } from '../queries/login';
import { ME } from '../queries/me';

const PROFILE_TITLE = 'Mi perfil';

const Profile = () => (
    <Query query={IS_LOGGED_IN}>
        {({ data }) => {
            if (!data || !data.isLoggedIn) {
                return (
                    <ApolloConsumer>
                        {client => (
                            <Mutation 
                                mutation={LOGIN_USER}
                                onCompleted={async ({ login }) => {
                                    await saveToken(login);
                                    client.writeData({ data: { isLoggedIn: true }});
                                }}>
                                {(login, { error }) => {
                                    return (
                                        <Layout title={PROFILE_TITLE}>
                                            {error && (
                                                <Text style={{
                                                    backgroundColor: 'red',
                                                    color: 'white',
                                                    width: '80%',
                                                    padding: 8
                                                }}>
                                                    {`Failed to log in. Error was: ${error.message}`}
                                                </Text>
                                            )}
                                            
                                            <LoginForm login={login} />
                                        </Layout>
                                    );
                                }}
                            </Mutation>
                        )}
                    </ApolloConsumer>
                );
            } else {
                return (
                    <Query query={ME} fetchPolicy="network-only">
                        {({ data, client }) => {
                            return (
                                <Layout title={PROFILE_TITLE}>
                                    <LoggedIn 
                                        user={data.me}
                                        logout={async () => {
                                            await clearSession();
                                            client.writeData({ data: { isLoggedIn: false }})
                                        }} 
                                    />
                                </Layout>
                            );
                        }}
                    </Query>
                );
            }
        }}
    </Query>
);

export default Profile;