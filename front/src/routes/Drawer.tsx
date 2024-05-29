import { createDrawerNavigator } from "@react-navigation/drawer";

import TabComponent from "./Tab";
import Login from "../paginas/Login";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    <Drawer.Navigator>
        <Drawer.Screen 
        name="Menu"
        component={TabComponent}/>

        <Drawer.Screen name="Login"
        component={Login} />
    </Drawer.Navigator>
}