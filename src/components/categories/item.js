import React from 'react';
import { Card, Title, withTheme } from 'react-native-paper';
import { TouchableItem } from '../../containers';

const CategoryItem = (props) => {
    const { colors } = props.theme;

    return (
        <TouchableItem 
            onPress={props.onPress} 
            backgroundColor={colors.surface}
            borderColor={colors.background}
        >
            <Card theme={props.theme}>
                <Card.Content style={{ alignItems: 'center' }}>
                    <Title>{props.category.name}</Title>
                </Card.Content>
                <Card.Cover source={props.category.imageUrl
                    ? { uri: props.category.imageUrl } 
                    : require('../../assets/default.png')} />
            </Card>
        </TouchableItem>
    );
}

export default withTheme(CategoryItem);