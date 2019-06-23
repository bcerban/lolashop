import React from 'react';
import { View, Alert } from 'react-native';
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
    text-align: center;
`;

const CategoryItem = (props) => (
    <ItemContainer onPress={props.onPress}>
        <View style={{ flex: 1, borderBottomWidth: 1, borderColor: '#d8d9e0', borderStyle: 'solid' }}>
            <ItemImage source={props.category.imageUrl
                ? { uri: props.category.imageUrl } 
                : require('../../assets/default.png')} />
        </View>
        
        <View style={{ 
            flexDirection: 'row', 
            flex: 1, 
        }}>
            <ItemTitle>{props.category.name}</ItemTitle>
        </View>
    </ItemContainer>
);

export default CategoryItem;