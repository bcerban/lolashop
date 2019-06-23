import React, {Component} from 'react';
import { View, Text, Alert, ActivityIndicator, FlatList } from 'react-native';
import { Query } from 'react-apollo';
import Layout from '../components/layout';
import { LocationItem } from '../components/locations';
import { GET_LOCATIONS } from '../queries/locations';
import getDistance from 'geolib/es/getDistance';
import openMap from 'react-native-open-maps';

const LOCATIONS_TITLE = 'Sucursales';

export default class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = { coords: null }
    }

    componentWillMount = () => {
        this.findDeviceLocation();
    }

    findDeviceLocation = () => {
        navigator.geolocation.getCurrentPosition(
            position => this.setState({ ...position }),
            error => Alert.alert('Error', error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }

    sortLocations = (locations) => {
        let locationsWithDistance = locations.map(location => { 
            const distance = getDistance(
                this.state.coords, 
                { latitude: location.latitude, longitude: location.longitude }
            );
            return { ...location, distance: distance };
        }).sort((a, b) => a.distance - b.distance);
        
        return locationsWithDistance;
    }

    viewInMap = (location) => {
        const loc = { latitude: location.latitude, longitude: location.longitude };
        console.log(loc);
        openMap({ 
            latitude: Number(location.latitude), 
            longitude: Number(location.longitude) 
        });
    }

    render() {
        return <Query query={GET_LOCATIONS}>
            {({ data, loading, error }) => {
                if (loading) return <Layout title={LOCATIONS_TITLE}><ActivityIndicator animating={loading} /></Layout>
                if (error) {
                    Alert.alert('Error', 'No podemos mostrar sucursales cercanas en este momento.');
                    return <Layout title={LOCATIONS_TITLE}></Layout>
                }

                const locations = this.sortLocations(data.locations);
                return (
                    <Layout title={LOCATIONS_TITLE}>
                        <Layout>
                            <View style={{ width: '95%' }}>
                                <FlatList
                                    data={locations}
                                    keyExtractor={item => item.id}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item }) => <LocationItem location={item} onPress={() => this.viewInMap(item)} />}
                                />
                            </View>
                        </Layout>
                    </Layout>
                );
            }}
        </Query>
    }
}