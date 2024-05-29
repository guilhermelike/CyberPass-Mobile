import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabComponent from "./Tab";
import Login from "../paginas/Login";
import Carrinho from "../paginas/Carrinho";
import Cidades from "../paginas/Cidades";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={Cidades}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}