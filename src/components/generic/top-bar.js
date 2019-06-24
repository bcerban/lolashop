import React from 'react';
import styled from 'styled-components';
import { withTheme } from 'react-native-paper';

const TopBarContainer = styled.View`
    margin: 0px;
    height: 100px;
    width: 100%;
    background-color: ${props => props.backgroundColor};
    justify-content: flex-end;
`;

const TopBarText = styled.Text`
  line-height: 50px;
  font-size: 16;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.color};
`;

const TopBar = (props) => {
    const { colors } = props.theme;

    return (
        <TopBarContainer backgroundColor={colors.surface}>
            <TopBarText color={colors.primary}>{props.title}</TopBarText>
        </TopBarContainer>
    );
}

export default withTheme(TopBar);