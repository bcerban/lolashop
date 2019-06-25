import React, {Component} from 'react';
import { Text, View, Dimensions, StyleSheet, Platform, Alert } from 'react-native';
import { withTheme, Title, Paragraph, Button } from 'react-native-paper';
import { Layout } from '../containers';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');
const padding = 15;

class Product extends Component {
    constructor(props) {
        super(props);
        const product = this.props.navigation.getParam('product');
        this.state = { 
            ...props,
            ...product,
            activeDotIndex: 0
        }
    }

    renderImage = ({ item, index }, parallaxProps) => (
        <View style={{ width: screenWidth, height: screenWidth }}>
            <ParallaxImage
                source={{ uri: item.uri }}
                dimensions={{ width: screenWidth, height: screenWidth }}
                parallaxFactor={0.4}
                showSpinner={true}
                containerStyle={{
                    flex: 1,
                    marginBottom: Platform.select({ ios: 0, android: 1 }), 
                    backgroundColor: 'white',
                    borderRadius: this.props.theme.roundness,
                }}
                style={{
                    ...StyleSheet.absoluteFillObject,
                    resizeMode: 'contain',
                }}
                {...parallaxProps}
            />
        </View>
    );
    
    render() {
        const images = this.state.images 
            ? this.state.images.map(i => { return { uri: i }; }) 
            : [];

        return (
            <Layout justifyContent='flex-start' scrollable={true}>
                <View style={{ 
                    height: screenWidth, 
                    border: `1px solid ${this.props.theme.colors.background}`,
                    backgroundColor: 'transparent' 
                }}>
                    <Carousel
                        ref={c => this.carousel = c}
                        sliderWidth={screenWidth}
                        sliderHeight={screenWidth}
                        itemWidth={screenWidth}
                        data={images}
                        renderItem={this.renderImage}
                        onSnapToItem={(index) => this.setState({ activeDotIndex: index })}
                        hasParallaxImages={true}
                        loop={true}
                    />
                    {/* <Pagination
                        dotsLength={images.length}
                        activeDotIndex={this.state.activeDotIndex}
                        // containerStyle={{ backgroundColor: 'transparent' }}
                        dotColor={this.props.theme.colors.primary}
                        dotStyle={{ height: 10, width: 10, borderRadius: 5 }}
                        inactiveDotColor={this.props.theme.colors.text}
                        inactiveDotStyle={{ height: 10, width: 10, borderRadius: 5 }}
                        carouselRef={this.carousel}
                        style={{ height: 10 }}
                    /> */}
                </View>
            
                <View style={{ width: screenWidth }}>
                    <Title style={{ 
                        textAlign: 'center',
                        color: this.props.theme.colors.primary,
                        backgroundColor: 'white',
                        padding: 10,
                        fontWeight: 'bold'
                    }}>
                        {this.state.name}
                    </Title>
                    <Paragraph style={{ padding: 10 }}>{this.state.description}</Paragraph>
                    <Paragraph style={{ padding: 10, fontWeight: 'bold' }}>Dimensiones: {this.state.dimensions}</Paragraph>
                    <Button 
                        icon="shopping-cart" 
                        mode="contained" 
                        onPress={() => Alert.alert('', 'Agregaste un producto a tu carrito!')}
                        style={{ width: '80%', marginLeft: '10%' }}
                    >
                        Agregar al carrito
                    </Button>
                </View>
            </Layout>
        );
    }
}

export default withTheme(Product);