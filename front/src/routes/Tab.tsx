import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../paginas/Home';
import Login from '../paginas/Login';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Carrinho from '../paginas/Carrinho';
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Button } from 'react-native' 

const Tab = createBottomTabNavigator();

type TabNavigation = {
  Home: undefined;
  //Home: {
  // name: string;
  // age: number;
  // adult: boolean;  
  Login: undefined;
};

export type TabTypes = BottomTabNavigationProp<TabNavigation>;

function LogoTitle() {
    return (
        <>
      <Text style={{textAlign: 'center', color: 'white', alignItems: 'center'}}>Cyber<Text style={{color: '#FF005C'}}>Pass</Text></Text>
      </>
    );
  }

function TabComponent() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={{
        tabBarActiveTintColor: '#FF005C',
        tabBarInactiveTintColor: '#fff',
        tabBarShowLabel: false,
        headerStyle:{
            backgroundColor: "black",
        },
        headerTitle: (props) => <LogoTitle {...props}/>,
        tabBarStyle:{
            backgroundColor: "black",
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
        <Tab.Screen name='Login' component={Login}
        options={{
            tabBarIcon: ({color:TintColor}) => (
                <Ionicons name='person' size={20} color={TintColor}/>
            )
        }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabComponent;