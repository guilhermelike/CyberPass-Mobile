import { createDrawerNavigator } from "@react-navigation/drawer";

import TabComponent from "./Tab";
import Login from "../paginas/Login";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    <NavigationContainer>
    <Drawer.Navigator>
        <Drawer.Screen 
        name="Menu"
        component={TabComponent}/>

        <Drawer.Screen name="Login"
        component={Login} />
    </Drawer.Navigator>
    </NavigationContainer>
}