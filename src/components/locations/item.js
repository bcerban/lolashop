import React from 'react';
import { IconButton, Card, Title, Paragraph, withTheme } from 'react-native-paper';
import { TouchableItem } from '../../containers';

const LocationItem = (props) => { 
    const { colors } = props.theme;

    return (
        <TouchableItem backgroundColor={colors.surface} borderColor={colors.background}>
            <Card theme={props.theme}>
                <Card.Content style={{ alignItems: 'center' }}>
                    <Title>{props.location.name}</Title>
                    <Paragraph>{props.location.street} | {props.location.city} | {props.location.country}</Paragraph>
                </Card.Content>
                
                <Card.Actions style={{ alignItems: 'center' }}>
                    <IconButton 
                        icon='map' 
                        color={colors.primary}
                        onPress={props.onPress} 
                        size={40}
                        accessibilityLabel='Ver en mapa'
                        style={{ flex: 1 }}
                    />
                </Card.Actions>
            </Card>
        </TouchableItem>
    );
}
export default withTheme(LocationItem);