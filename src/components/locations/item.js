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

const height = 40;
const unit = 8;

const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  height: ${height};
  min-width: 150;
  margin: 20px;
  padding: 0 ${unit * 4}px;
  border-radius: ${height / 2};
  background-color: ${props => props.backgroundColor};
`;

const ButtonText = styled.Text`
  line-height: ${height}px;
  font-size: 16;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.color};
`;

const LocationItem = (props) => (
    <ItemContainer>
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <ItemTitle>{props.location.name}</ItemTitle>
        </View>
        <ItemDescription>{props.location.street} | {props.location.city} | {props.location.country}</ItemDescription>
        <ButtonContainer onPress={props.onPress} backgroundColor="#1e152a">
            <ButtonText color="white">Ver en mapa</ButtonText>
        </ButtonContainer>
    </ItemContainer>
);

export default LocationItem;