import React from 'react';
import styled from 'styled-components';

const height = 40;
const unit = 8;

const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  height: ${height};
  min-width: 150;
  margin: 0 auto;
  padding: 0 ${unit * 4}px;
  border-radius: ${height / 2};
  background-color: ${props => props.backgroundColor};
`;

const ButtonText = styled.Text`
  line-height: ${height}px;
  /* font-family: ; */
  font-size: 16;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.color};
`;

const StyledButton = (props) => (
  <ButtonContainer onPress={props.onPress} backgroundColor={props.backgroundColor} >
    <ButtonText color={props.color}>{props.title}</ButtonText>
  </ButtonContainer>
);

export default StyledButton;