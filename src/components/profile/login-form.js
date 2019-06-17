import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Heading, StyledButton, StyledForm } from '../generic';

const unit = 8;
const colors = {
    primary: '#E77684',
    secondary: '#8A8B93',
    accent: '#6A6278',
    background: '#f7f8fa',
    grey: '#d8d9e0',
    text: '#454955',
    textSecondary: '#BE5A38'
};

export default class LoginForm extends Component {
  state = { email: '' };

  onSubmit = () => {
    if (!this.state.email || this.state.email == '') {
      alert(`Email cannot be empty!`);
    } else {
      this.props.login({ variables: { email: this.state.email } });
    }
  };

  render() {
    return (
      <Container>
          <Heading>Regístrate</Heading>
          <StyledForm>
              <StyledInput
                  placeholder="Email"
                  data-testid="login-email"
                  keyboardType="email-address"
                  onChangeText={(text) => {
                    this.setState({ email: text.toLowerCase() });
                  }}
              />
              <StyledButton 
                title="Log in" 
                color="white"
                backgroundColor="#1e152a"
                onPress={this.onSubmit} 
              />
          </StyledForm>
      </Container>  
    );
  }
}

const StyledInput = styled.TextInput`
  width: 100%;
  margin-bottom: ${unit * 2}px;
  padding: ${unit * 1.25}px ${unit * 2.5}px;
  border: 1px solid ${colors.grey};
  font-size: 16;
`;
