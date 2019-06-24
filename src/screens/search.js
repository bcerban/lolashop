import React, {Component} from 'react';
import { Text } from 'react-native';
import { CategoryList, Layout } from '../containers';

export default class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Layout><CategoryList navigation={this.props.navigation} /></Layout>
    }
}