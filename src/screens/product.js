import React, {Component} from 'react';
import { Text, View, Dimensions, StyleSheet, Platform } from 'react-native';
import { withTheme, Title } from 'react-native-paper';
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
        <View style={{ width: screenWidth - padding * 2, height: screenWidth - padding * 2 }}>
            <ParallaxImage
                source={{ uri: item.uri }}
                dimensions={{ width: screenWidth - padding * 2, height: screenWidth - padding * 2 }}
                parallaxFactor={0.4}
                showSpinner={true}
                containerStyle={{
                    flex: 1,
                    marginBottom: Platform.select({ ios: 0, android: 1 }), 
                    backgroundColor: this.props.theme.colors.background,
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
            <Layout title={this.state.name}>
                {/* <View>
                    <Title>{this.state.name}</Title>
                </View> */}

                <View style={{ paddingBottom: padding, height: screenWidth + padding * 2 + 15 }}>
                    <Carousel
                        ref={c => this.carousel = c}
                        sliderWidth={screenWidth}
                        sliderHeight={screenWidth}
                        itemWidth={screenWidth - padding * 2}
                        data={images}
                        renderItem={this.renderImage}
                        onSnapToItem={(index) => this.setState({ activeDotIndex: index })}
                        hasParallaxImages={true}
                        loop={true}
                    />
                    <Pagination
                        dotsLength={images.length}
                        activeDotIndex={this.state.activeDotIndex}
                        containerStyle={{ backgroundColor: this.props.theme.colors.background }}
                        dotColor={this.props.theme.colors.primary}
                        dotStyle={{ height: 10, width: 10, borderRadius: 5 }}
                        inactiveDotColor={this.props.theme.colors.text}
                        carouselRef={this.carousel}
                        style={{ height: 10 }}
                    />
                </View>
                
            </Layout>
        );
    }
}

export default withTheme(Product);