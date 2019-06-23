import React from 'react';
import styled from 'styled-components';

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

const AddToCartButton = (props) => (
  <ButtonContainer onPress={props.remove} backgroundColor={props.backgroundColor}>
      <ButtonText color={props.color}>{props.title}</ButtonText>
  </ButtonContainer>
);

export default AddToCartButton;