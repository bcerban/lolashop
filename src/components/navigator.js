import React from 'react';
// import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Cart from '../screens/cart';
import Favorites from '../screens/favorites';
import Locations from '../screens/locations';
import Profile from '../screens/profile';
import Search from '../screens/search';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomNavigator = createBottomTabNavigator({
    Search: { 
        screen: Search,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-search' color={tintColor} size={35} />
        }) 
    },
    Locations: { 
        screen: Locations,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-pin' color={tintColor} size={35} />
        }) 
    },
    Favorites: { 
        screen: Favorites,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-heart' color={tintColor} size={35} />
        }) 
    },
    Cart: { 
        screen: Cart,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-cart' color={tintColor} size={35} />
        }) 
    },
    Profile: { 
        screen: Profile,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-contact' color={tintColor} size={35} />
        }) 
    }
}, {
    tabBarOptions: {
        initialRouteName: 'Profile',
        showIcon: true,
        showLabel: false,
        activeTintColor: '#1e152a',
        inactiveTintColor: '#454955',
        style: {
            backgroundColor: '#ffffff'
        }
    }
});

const MainNavigator = createAppContainer(BottomNavigator);

export default MainNavigator;