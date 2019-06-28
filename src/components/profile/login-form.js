import React, { Component } from 'react';
import { View } from 'react-native';
import { Title, TextInput, Button, Paragraph, withTheme } from 'react-native-paper';

class LoginForm extends Component {
  state = { email: '' };

  onSubmit = () => {
    if (!this.state.email || this.state.email == '') {
      alert(`Email cannot be empty!`);
    } else {
      this.props.login({ variables: { email: this.state.email } });
    }
  };

  render() {
    const { colors } = this.props.theme;

    return (
      <View style={{ 
          width: '100%', 
          flex: 1,
          alignItems: 'center', 
          justifyContent: 'center'
        }}>
        
        <Title>Registrate</Title>
        
        <TextInput
          value={this.state.email}
          label={"Email"}
          keyboardType="email-address"
          mode='outlined'
          onChangeText={(text) => { this.setState({ email: text.toLowerCase() }); }}
          style={{ width: '90%' }}
          error={this.props.error}
        />

        {this.props.error ? (
          <Paragraph style={{ color: colors.error, width: '90%' }}>{this.props.error.message}</Paragraph>
        ) : null}
        
        <Button 
            mode="contained" 
            onPress={this.onSubmit}
            style={{ width: '90%', marginTop: 20 }}
        >
            Ingresar
        </Button> 
      </View>
    );
  }
}

export default withTheme(LoginForm);