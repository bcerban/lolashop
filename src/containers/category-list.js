import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert } from 'react-native';
import { Query } from 'react-apollo';
import { GET_CATEGORIES } from '../queries/categories';
import { CategoryItem } from '../components/categories';

export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasMore: false, 
            cursor: null, 
            categories: []
        }
    }

    goToCategory = (category) => {
        if (category && this.props.navigation) {
            this.props.navigation.navigate('Category', { category: category });
        } else {
            Alert.alert('Error', 'No se pudo cargar la categoría en este momento.');
        }
    }

    render() {
        const emptyList = <Text>No hay categorías para mostrar.</Text>;
        
        return (
            <Query 
                query={GET_CATEGORIES}
                onCompleted={(data) => {
                    this.setState({ 
                        hasMore: data.categories.hasMore, 
                        cursor: data.categories.cursor, 
                        categories: data.categories.categories
                    })
                }}
            >
                {({ loading, error }) => {
                    if (loading) return <ActivityIndicator animating={loading} />;
                    if (error) return emptyList;
                    if (this.state.categories.length == 0) return emptyList;

                    return (
                        <View style={{ width: '95%' }}>
                            <FlatList
                                data={this.state.categories}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => <CategoryItem category={item} onPress={() => this.goToCategory(item)} />}
                            />
                        </View>
                    );
                }}
            </Query>
        );
    }
}