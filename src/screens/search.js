import React, {Component} from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import { CategoryList, Layout } from '../containers';
import { FEATURED } from '../queries/products';
import { featuredProducts, FeaturedProducts } from '../components/products';

export default class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let featuredProductsCarousel;

        return (
            <Query query={FEATURED}>
                {({ data, loading, error }) => {
                    if (loading) return <Layout><ActivityIndicator animating={loading} /></Layout>;
                    if (data 
                        && data.featuredProducts 
                        && data.featuredProducts.products
                        && data.featuredProducts.products.length > 0
                    ) {
                        featuredProductsCarousel = <FeaturedProducts 
                            products={data.featuredProducts.products} 
                            navigation={this.props.navigation} 
                        />;
                    }

                    return (
                        <Layout justifyContent='flex-start' scrollable={true}>
                            {featuredProductsCarousel}
                            <CategoryList navigation={this.props.navigation} />
                        </Layout>
                    );
                }}
            </Query>
        );
    }
}