import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabComponent from "./Tab";
import Login from "../paginas/Login";
import Carrinho from "../paginas/Carrinho";
import Cidades from "../paginas/Cidades";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Cidades}/>
    </Stack.Navigator>
  )
}