import React from 'react';
import { Alert } from 'react-native';
import { Mutation } from 'react-apollo';
import { Button, ActivityIndicator } from 'react-native-paper';
import { ADD_TO_CART, MY_CART } from '../../queries/cart';

const AddToCartButton = (props) => (
    <Mutation 
        mutation={ADD_TO_CART}
        variables={{ id: props.productId }}
        refetchQueries={[ { query: MY_CART } ]}
    >
        {(addToCart, { error, loading, data }) => {
            if (loading) return <ActivityIndicator animating={loading} />;
            if (error) Alert.alert('Error', error.message);

            if (data && data.addToCart.success) {
                Alert.alert('Éxito', `El product fue agregado a tu carrito.`);
            }

            return (
                <Button 
                    icon="shopping-cart" 
                    mode="contained" 
                    onPress={addToCart}
                    style={{ width: '80%', marginLeft: '10%', marginTop: 20 }}
                >
                    Agregar al carrito
                </Button>
            );
        }}
    </Mutation>
);

export default AddToCartButton;