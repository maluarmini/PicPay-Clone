import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather, Ionicons, Entypo} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Principais from './TabsPayment/Principais';
import Locais from './TabsPayment/Locais';
import Store from './TabsPayment/Store';

const icons = {
    Principais: {
        lib: Entypo,
        name: 'thumbs-up',
    },
    Locais: {
        lib: Feather,
        name: 'map-pin',
    },
    Store: {
        lib: Ionicons,
        name: 'md-appstore',
    },
}


export default function NavigationPayment(){
    return(
        <Tab.Navigator screenOptions={({ route, navigation}) => ({
            tabBarIcon: ({color,size}) => {
                const {lib: Icon, name} = icons[route.name];
                return <Icon name={name} size={size} color={color}/>
            }, 
        })}
            tabBarOptions={{
            style:{
                backgroundColor: '#000',
                borderTopColor: 'rgba(0, 0, 0, 0.2)'
            },
            activeTintColor: '#10c86e',
            inactiveTintColor: '#92929c',
        }}
        >
            <Tab.Screen name="Principais" component={Principais}/>
            <Tab.Screen name="Locais" component={Locais}/>
            <Tab.Screen name="Store" component={Store}/>
        </Tab.Navigator>

    );
}