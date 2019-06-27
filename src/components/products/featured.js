import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { withTheme, Card, Title } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import { TouchableItem } from '../../containers';

const { width: screenWidth } = Dimensions.get('window');

class FeaturedProducts extends Component {
    constructor(props) {
        super(props);
        this.state = { activeDotIndex: 0 }
    }

    goToProduct = (product) => {
        if (product && this.props.navigation) {
            this.props.navigation.navigate('Product', { product: product });
        }
    }

    renderProduct = ({ item }, parallaxProps) => (
        <TouchableItem borderColor='transparent' backgroundColor='transparent' onPress={() => this.goToProduct(item)} >
            <Card style={{ height: parallaxProps.sliderHeight }}>
                <Card.Cover 
                    source={{ uri: item.mainImage }} 
                    style={{ height: parallaxProps.sliderHeight, width: 90, resizeMode: 'contain', resizeMethod: 'scale' }}
                />
                <Card.Content style={{ 
                    width: screenWidth, 
                    height: parallaxProps.sliderHeight,
                    position: 'absolute', 
                    top: 0, 
                    right: 0, 
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.name.toUpperCase()}</Text>
                </Card.Content>
            </Card>
        </TouchableItem>
    );

    render() {
        return (
            <View style={{ margin: 10, height: 200 }}>
                <Title style={{ width: screenWidth, textAlign: 'center' }}>Destacados para vos</Title>
                <Carousel
                    ref={c => this.carousel = c}
                    sliderWidth={screenWidth}
                    sliderHeight={100}
                    itemWidth={180}
                    data={this.props.products}
                    renderItem={this.renderProduct}
                    onSnapToItem={(index) => this.setState({ activeDotIndex: index })}
                    hasParallaxImages={true}
                    loop={true}
                />
            </View>
        );
    }
}
export default withTheme(FeaturedProducts);