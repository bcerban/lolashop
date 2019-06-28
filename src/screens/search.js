import React, {Component} from 'react';
import { Text, FlatList, View, Alert } from 'react-native';
import { Searchbar, ActivityIndicator, withTheme } from 'react-native-paper';
import { Query } from 'react-apollo';
import { Layout } from '../containers';
import { SEARCH } from '../queries/products';
import { ProductItem } from '../components/products';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { keyword: '' }
    }

    goToProduct = (product) => {
        if (product && this.props.navigation) {
            this.props.navigation.navigate('Product', { product: product });
        } else {
            Alert.alert('Error', 'No se pudo cargar el producto en este momento.');
        }
    }

    render() {
        let { keyword } = this.state;
        const { colors } = this.props.theme;

        return (
            <Layout justifyContent='flex-start'>
                <Searchbar
                    placeholder="Buscar"
                    onChangeText={query => { this.setState({ keyword: query }); }}
                    value={keyword}
                    iconColor={colors.primary}
                />

                {keyword && keyword.length > 2 ? (
                    <Query query={SEARCH} variables={{ keyword: keyword }}>
                        {({ data, loading, error }) => {
                            if (loading) {
                                return (
                                    <View style={{ flex: 1,  justifyContent: 'center' }}>
                                        <ActivityIndicator animating={loading} />
                                    </View>
                                );
                            }

                            const result = data 
                                && data.search 
                                && data.search.products 
                                ? data.search.products 
                                : [];
                            
                            if (result.length > 0) {
                                return (
                                    <View style={{ width: '95%' }}>
                                        <FlatList
                                            data={result}
                                            keyExtractor={item => item.id}
                                            showsVerticalScrollIndicator={false}
                                            renderItem={({ item }) => <ProductItem product={item} onPress={() => this.goToProduct(item)} />}
                                        />
                                    </View>
                                );
                            }

                            const text = error ? error.message : 'No hay productos para mostrar';
                            return (
                                <View style={{ flex: 1,  justifyContent: 'center' }}>
                                    <Text>{text}</Text>
                                </View>
                            );
                        }}
                    </Query>
                ) : null}
            </Layout>
        );
    }
}

export default withTheme(Search);