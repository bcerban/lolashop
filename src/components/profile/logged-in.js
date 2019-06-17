import React from 'react';
import { Container, Heading, StyledButton, StyledForm } from '../generic';
import styled from 'styled-components';

const Avatar = styled.Image`
    width: 175px;
    height: 175px;
    background-color: #f3eff5;
    border-radius: 87.5px;
    margin: 16px 0px;
`;

const Description = styled.Text`
    margin: 16px 0px;
`;

const LoggedIn = (props) => (
    <Container>
        <StyledForm>
            <Heading>Mi cuenta</Heading>
            {props.user && (
                <Avatar source={{ uri: props.user.avatarUrl }} />
            )}
            <Description>
                Estás registrado como {props.user ? props.user.email : ''}.
            </Description>
            <StyledButton 
                title="Log out" 
                color="white"
                backgroundColor="#1e152a"
                onPress={props.logout} 
            />
        </StyledForm>
    </Container>
);

export default LoggedIn;