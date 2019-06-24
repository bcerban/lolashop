import React from 'react';
import { Text } from 'react-native';
import { Card, Title, withTheme } from 'react-native-paper';
import { TouchableItem } from '../../containers';

const ProductItem = (props) => {
    const { colors } = props.theme;

    return (
        <TouchableItem 
            onPress={props.onPress} 
            backgroundColor={colors.surface}
            borderColor={colors.background}
        >
            <Card theme={props.theme}>
                <Card.Cover source={props.product.mainImage 
                    ? { uri: props.product.mainImage } 
                    : require('../../assets/default.png')} />

                <Card.Content style={{ alignItems: 'center' }}>
                    <Title style={{ color: colors.accent }}>{props.product.name}</Title>
                    <Title>${props.product.price}</Title>
                </Card.Content>
            </Card>
        </TouchableItem>
    );
}
export default withTheme(ProductItem);