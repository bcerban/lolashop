import React, { Component } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { Query, Mutation } from 'react-apollo';
import { MY_CART, REMOVE_FROM_CART } from '../queries/cart';
import { CartItem } from '../components/cart';

export default class CartList extends Component {
    goToProduct = (product) => {
        if (product && this.props.navigation) {
            this.props.navigation.navigate('Product', { product: product });
        } else {
            Alert.alert('Error', 'No se pudo cargar el producto en este momento.');
        }
    }

    render() {
        return (
            <Query query={MY_CART} fetchPolicy='cache-and-network'>
                {({ data, loading, error }) => {
                    if (error) {
                        return (
                            <Text style={{
                                alignItems: 'center',
                                textAlign: 'center',
                                width: '80%'
                            }}>
                                {`Error al cargar el carrito. ${error.message}`}
                            </Text>
                        );
                    } else if (loading) {
                        return <ActivityIndicator animating={loading} />;
                    } else {
                        if (data.me.cart && data.me.cart.length > 0) {
                            return (
                                <View style={{ width: '95%' }}>
                                    <FlatList 
                                        data={data.me.cart}
                                        renderItem={({ item }) => (
                                            <Mutation 
                                                mutation={REMOVE_FROM_CART}
                                                variables={{ id: item.id }} 
                                                refetchQueries={[ { query: MY_CART } ]}
                                            >
                                                {(remove, { loading, error }) => {
                                                    if (error) {
                                                        Alert.alert(
                                                            'Error',
                                                            'No se pudo quitar el producto del carrito en este momento. Intentalo más tarde.'
                                                        );
                                                    } 
                                                    if (loading) {
                                                        return <ActivityIndicator animating={loading} />;
                                                    }
                                                    return <CartItem product={item} remove={remove} onPress={() => this.goToProduct(item)} />;
                                                }}
                                            </Mutation>
                                        )}
                                        keyExtractor={item => item.id}
                                        showsVerticalScrollIndicator={false}
                                    />
                                </View>
                            );
                        } else {
                            return (
                                <Text style={{
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    width: '80%'
                                }}>No agregaste ningún producto al carrito todavía.</Text>
                            );
                        }
                    }
                }}
            </Query>
        );
    }
}