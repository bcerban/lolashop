import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const ItemContainer = styled.View`
    background-color: white;
    border: 1px solid #d8d9e0;
    margin: 10px 0px;
`;

const ItemTitle = styled.Text`
    flex: 1;
    margin: 10px 16px;
    color: #1e152a;
    font-size: 24px;
    font-weight: bold;
`;

const ItemDescription = styled.Text`
    width: 90%;
    margin: 10px 5% 20px;
    color: #1e152a;
`;

const LocationItem = (props) => (
    <ItemContainer>
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <ItemTitle>{props.location.name}</ItemTitle>
        </View>
        
        <ItemDescription>{props.location.street} | {props.location.city} | {props.location.country}</ItemDescription>
        {/* <RemoveItemButton 
            title="Quitar" 
            color="white"
            backgroundColor="#1e152a"
            productId={props.product.id}
            remove={props.remove}
        /> */}
    </ItemContainer>
);

export default LocationItem;