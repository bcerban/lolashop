import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const ItemContainer = styled.TouchableOpacity`
    background-color: white;
    border: 1px solid #d8d9e0;
    margin: 10px 0px;
`;

const ItemImage = styled.Image`
    width: 100%; 
    height: 275px;
`;

const ItemTitle = styled.Text`
    flex: 1;
    margin: 10px 16px;
    color: #1e152a;
    font-size: 24px;
    font-weight: bold;
`;

const ItemPrice = styled.Text`
    margin: 10px;
    color: #1e152a;
    font-size: 24px;
    font-weight: bold;
    text-align: right;
`;

const ItemDescription = styled.Text`
    width: 90%;
    margin: 10px 5% 20px;
    color: #1e152a;
`;

const ProductItem = (props) => (
    <ItemContainer onPress={props.onPress}>
        <View style={{ flex: 1, borderBottomWidth: 1, borderColor: '#d8d9e0', borderStyle: 'solid' }}>
            <ItemImage source={props.product.mainImage 
                ? { uri: props.product.mainImage } 
                : require('../../assets/default.png')} />
        </View>
        
        <View style={{ 
            flexDirection: 'row', 
            flex: 1, 
        }}>
            <ItemTitle>{props.product.name}</ItemTitle>
            <ItemPrice>${props.product.price}</ItemPrice>
        </View>
        
        {/* <ItemDescription>{props.product.description}</ItemDescription> */}
    </ItemContainer>
);

export default ProductItem;