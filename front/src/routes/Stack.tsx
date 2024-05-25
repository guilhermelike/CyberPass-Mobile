import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../paginas/Home';
import Login from '../paginas/Login';

const Stack = createNativeStackNavigator();

type StackNavigation = {
  Home: undefined;
  //Home: {
  // name: string;
  // age: number;
  // adult: boolean;  
  Login: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackComponent;