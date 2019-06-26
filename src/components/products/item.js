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
                <Card.Content>
                    <Title style={{ color: colors.primary, fontWeight: 'bold' }}>{props.product.name}</Title>
                </Card.Content>

                <Card.Cover source={props.product.mainImage 
                    ? { uri: props.product.mainImage } 
                    : require('../../assets/default.png')} />
                <Card.Content style={{ flex: 1, marginTop: 5, alignItems: 'flex-end' }}>
                    <Text style={{ color: colors.text, fontWeight: 'bold' }}>${props.product.price}</Text>
                </Card.Content>    
            </Card>
        </TouchableItem>
    );
}
export default withTheme(ProductItem);