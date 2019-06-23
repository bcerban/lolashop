import React from 'react';
import { Text } from 'react-native';
import { Query } from 'react-apollo';
import Layout from '../components/layout';
import { IS_LOGGED_IN } from '../queries/isLoggedIn';
import { CartList } from '../containers';

const CART_TITLE = 'Mi carrito';

const Cart = () => (
    <Query query={IS_LOGGED_IN}>
        {({ data }) => {
            if (!data || !data.isLoggedIn) {
                return (
                    <Layout title={CART_TITLE}>
                        <Text style={{
                            alignItems: 'center',
                            textAlign: 'center',
                            width: '80%'
                        }}>Inicia sesión para agregar productos a tu carrito.</Text>
                    </Layout>
                );
            } else {
                return <Layout title={CART_TITLE}><CartList /></Layout>
            }
        }}
    </Query>
);

export default Cart;