import React from 'react';
import { Text } from 'react-native';
import { Query, ApolloConsumer, Mutation } from 'react-apollo';
import { clearSession, saveToken } from '../util/session';
import Layout from '../components/layout';
import { LoggedIn, LoginForm } from '../components/profile';
import { IS_LOGGED_IN, LOGIN_USER, ME } from '../queries/user';
import { ActivityIndicator } from 'react-native-paper';

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
                                    await saveToken(login.login);
                                    client.writeData({ data: { isLoggedIn: true }});
                                }}>
                                {(login, { loading, error }) => {
                                    if (loading) {
                                        return (
                                            <Layout title={PROFILE_TITLE}>
                                                <ActivityIndicator animating={loading} />
                                            </Layout>
                                        );
                                    }

                                    return (
                                        <LoginForm login={login} error={error} />
                                    );
                                }}
                            </Mutation>
                        )}
                    </ApolloConsumer>
                );
            } else {
                return (
                    <Query query={ME} fetchPolicy='cache-and-network'>
                        {({ data, loading, client }) => {
                            if (loading) {
                                return (
                                    <Layout title={PROFILE_TITLE}>
                                        <ActivityIndicator animating={loading} />
                                    </Layout>
                                );
                            }

                            return (
                                <Layout title={PROFILE_TITLE}>
                                    {data && data.me ? (
                                        <LoggedIn 
                                            user={data.me}
                                            logout={async () => {
                                                await clearSession();
                                                client.writeData({ data: { isLoggedIn: false }})
                                            }} 
                                        />
                                    ) : (
                                        <Text>Error</Text>
                                    )}
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