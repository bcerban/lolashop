import React, {Component} from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { Query } from 'react-apollo';
import { CategoryList } from '../containers';
import Layout from '../components/layout';
import { FEATURED } from '../queries/products';
import { FeaturedProducts } from '../components/products';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let featuredProductsCarousel;

        return (
            <Query query={FEATURED}>
                {({ data, loading }) => {
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