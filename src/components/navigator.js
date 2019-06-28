import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Cart, Category, Favorites, Home, Locations, Product, Profile, Search } from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CatalogNavigator = createStackNavigator({
    Home: Home,
    Category: Category,
    Product: Product
}, {
});

const SearchNavigator = createStackNavigator({
    Search: Search,
    Product: Product
}, {});

const CartNavigator = createStackNavigator({
    Cart: Cart,
    Product: Product
}, {});

const BottomNavigator = createBottomTabNavigator({
    Home: { 
        screen: CatalogNavigator,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-home' color={tintColor} size={35} />
        }) 
    },
    Seach: {
        screen: SearchNavigator,
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
    // Favorites: { 
    //     screen: Favorites,
    //     navigationOptions: () => ({
    //         tabBarIcon: ({ tintColor }) => <Ionicons name='ios-heart' color={tintColor} size={35} />
    //     }) 
    // },
    Cart: { 
        screen: CartNavigator,
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