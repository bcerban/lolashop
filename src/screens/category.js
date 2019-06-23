import React, {Component} from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert } from 'react-native';
import { Query } from 'react-apollo';
import Layout from '../components/layout';
import ProductItem from '../components/products/item';
import { GET_CATEGORY_PRODUCTS } from '../queries/categories';

export default class Category extends Component {
    constructor(props) {
        super(props);
        const category = this.props.navigation.getParam('category');
        this.state = { 
            ...props,
            ...category,
            hasMore: false, 
            cursor: null, 
            products: [], 
        }
    }
    
    goToProduct = (product) => {
        if (product && this.props.navigation) {
            this.props.navigation.navigate('Product', { product: product });
        } else {
            Alert.alert('Error', 'No se pudo cargar el producto en este momento.');
        }
    }

    render() {
        const emptyList = <Layout><Text>No hay productos para mostrar.</Text></Layout>;

        return (
            <Query 
                query={GET_CATEGORY_PRODUCTS}
                variables={{ id: this.state.id }}
                fetchPolicy="network-only"
                onCompleted={(data) => {
                    console.log(data);
                    this.setState({ 
                        hasMore: data.categoryProducts.hasMore, 
                        cursor: data.categoryProducts.cursor, 
                        products: data.categoryProducts.products
                    })
                }}
            >
                {({ loading, error }) => {
                    if (loading) return <ActivityIndicator animating={loading} />;
                    if (error) return emptyList;
                    if (this.state.products.length == 0) return emptyList;

                    return (
                        <Layout>
                            <View style={{ width: '95%' }}>
                                <FlatList
                                    data={this.state.products}
                                    keyExtractor={item => item.id}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item }) => <ProductItem product={item} onPress={() => this.goToProduct(item)} />}
                                />
                            </View>
                        </Layout>
                    );
                }}
            </Query>
        );
    }
}