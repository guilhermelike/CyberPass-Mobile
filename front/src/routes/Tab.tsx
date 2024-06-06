import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../paginas/Home';
import Login from '../paginas/Login';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Carrinho from '../paginas/Carrinho';
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Button } from 'react-native' 
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from '../paginas/Cadastro';
import Evento from '../paginas/Evento';
import Card from '../componentes/Card/Index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Usuario(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Cadastro" component={Cadastro}/>
            <Stack.Screen name="Card" component={Card}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Evento" component={Evento}/>

        </Stack.Navigator>
    )
}

function Fluxo(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Evento" component={Evento}/>
        </Stack.Navigator>
    )
}

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
        <Tab.Screen name='Fluxo' component={Fluxo}
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
        <Tab.Screen name='Usuário' component={Usuario}
        options={{
            tabBarIcon: ({color:TintColor}) => (
                <Ionicons name='person' size={20} color={TintColor}/>
            ),
            headerShown: false
        }}></Tab.Screen>
      </Tab.Navigator>
  );
}

export default TabComponent;


