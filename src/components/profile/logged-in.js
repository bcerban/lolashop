import React from 'react';
import { View } from 'react-native';
import { withTheme, Avatar, Paragraph, Button } from 'react-native-paper';

const LoggedIn = (props) => {
    return (
        <View style={{ alignItems: 'center', width: '80%' }}>
            {props.user && (
                <View style={{ 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: '100%',
                    marginBottom: 20
                }}>
                    <Avatar.Image source={{ uri: props.user.avatarUrl }} size={150} />
                </View>
            )}
            <Paragraph>Estas registrado como {props.user ? props.user.email : ''}</Paragraph>
            <Button 
                icon="input" 
                mode="contained" 
                onPress={props.logout}
                style={{ width: '90%', marginLeft: '5%', marginTop: 20 }}
            >
                Cerrar sesión
            </Button> 
        </View>
    );
}

export default withTheme(LoggedIn);