import { NavigationContainer } from "@react-navigation/native";
import TabComponent from "./Tab";
import React from "react";
import DrawerRoutes from "./Drawer";

export default function Routes(){
    return (
        <NavigationContainer>
            <DrawerRoutes />
        </NavigationContainer>
    )
}