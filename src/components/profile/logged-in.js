import React from 'react';
import { Container, Heading, StyledButton, StyledForm } from '../generic';
import { Text } from 'react-native';

const LoggedIn = (props) => (
    <Container>
        <Heading>Mi cuenta</Heading>
        <StyledForm>
            <Text>The user is LOGGED IN.</Text>
            <Text>The user is identified by {props.user ? props.user.email : ''}.</Text>
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