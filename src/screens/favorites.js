import React, {Component} from 'react';
import { Text } from 'react-native';
import { Layout } from '../containers';

const FAVS_TITLE = 'Favoritos';

export default class Favorites extends Component {
    render() {
        return <Layout title={FAVS_TITLE}><Text>Hi! This is the favs view.</Text></Layout>
    }
}