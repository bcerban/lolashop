import React, {Component} from 'react';
import { Text } from 'react-native';
import Layout from '../components/layout';

export default class Product extends Component {
    constructor(props) {
        super(props);
        const product = this.props.navigation.getParam('product');
        this.state = { 
            ...props,
            ...product,
        }
    }
    
    render() {
        return <Layout><Text>Product: {this.state.name}</Text></Layout>
    }
}