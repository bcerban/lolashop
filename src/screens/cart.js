import React from 'react';
import { Text } from 'react-native';
import { Query } from 'react-apollo';
import { IS_LOGGED_IN } from '../queries/isLoggedIn';
import { CartList, Layout } from '../containers';

const CART_TITLE = 'Mi carrito';

const Cart = (props) => (
    <Query query={IS_LOGGED_IN}>
        {({ data }) => {
            if (!data || !data.isLoggedIn) {
                return (
                    <Layout>
                        <Text style={{
                            alignItems: 'center',
                            textAlign: 'center',
                            width: '80%'
                        }}>Inicia sesión para agregar productos a tu carrito.</Text>
                    </Layout>
                );
            } else {
                return <Layout><CartList navigation={props.navigation} /></Layout>
            }
        }}
    </Query>
);

export default Cart;