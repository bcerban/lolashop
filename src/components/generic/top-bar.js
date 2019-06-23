import React from 'react';
import styled from 'styled-components';

const TopBarContainer = styled.View`
    margin: 0px;
    height: 100px;
    width: 100%;
    background-color: white;
    justify-content: flex-end;
`;

const TopBarText = styled.Text`
  line-height: 50px;
  font-size: 16;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #1e152a;
`;

const TopBar = (props) => (
    <TopBarContainer>
        <TopBarText>{props.title}</TopBarText>
    </TopBarContainer>
);

export default TopBar;