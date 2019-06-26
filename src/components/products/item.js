import React from 'react';
import { Text } from 'react-native';
import { Card, withTheme } from 'react-native-paper';
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
                <Card.Content style={{ flex: 1, marginTop: 5 }}>
                    <Text style={{ color: colors.primary, fontWeight: 'bold' }}>{props.product.name}</Text>
                    <Text style={{ color: colors.primary, fontWeight: 'bold' }}>${props.product.price}</Text>
                </Card.Content>    
            </Card>
        </TouchableItem>
    );
}
export default withTheme(ProductItem);