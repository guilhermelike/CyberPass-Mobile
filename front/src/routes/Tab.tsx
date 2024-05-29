import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../paginas/Home';
import Login from '../paginas/Login';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Carrinho from '../paginas/Carrinho';
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Button } from 'react-native' 
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();


function TabComponent() {
  return (
      <Tab.Navigator
       screenOptions={{
        tabBarActiveTintColor: '#FF005C',
        tabBarInactiveTintColor: 'black',
        tabBarShowLabel: false,
        headerShown: false,   
        tabBarStyle:{
            backgroundColor: "white",
            position: "absolute",
            bottom: 10,
            width: '70%',
            borderRadius: 30,
            elevation: 0,
            left: 55,
        }
    }}>
        <Tab.Screen name='Home' component={Home}
        options={{
            tabBarIcon: ({color:TintColor}) => (
                <Ionicons name='home' size={20} color={TintColor}/>
            )
        }}></Tab.Screen>
        <Tab.Screen name='Carrinho' component={Carrinho}
        options={{
            tabBarIcon: ({color:TintColor}) => (
                <Ionicons name='cart' size={20} color={TintColor}/>
            ),
            tabBarBadge:1
        }}></Tab.Screen>
      </Tab.Navigator>
  );
}

export default TabComponent;


