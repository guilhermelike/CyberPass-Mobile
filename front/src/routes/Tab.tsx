import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
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
import { AuthContext } from './Auth';
import Perfil from '../paginas/Perfil';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Pedidos from '../paginas/Pedidos';
import Dados from '../paginas/Dados';
import Header from '../componentes/Header';
import Component from 'react-native-paper/lib/typescript/components/List/ListItem';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const HeaderTitle = ({ children }) => {
    const navigation = useNavigation();
  
    return (
      <View style={{ flexDirection: 'row', marginTop: -12 }}>
        <Text style={{ color: 'white', fontSize: 25, fontWeight: '300'}}>Cyber</Text>
        <Text style={{ color: '#FF005C', fontSize: 25, fontWeight: '400'}}>{children}</Text>
      </View>
    );
  };

function Usuario(){
    const { user } = React.useContext(AuthContext);
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* É NECESSÁRIO ALTERAR A ORDEM, ESTÁ AO CONTRÁRIO PARA SER POSSÍVEL FAZER AS TELAS DE USUÁRIO LOGADO*/}
            {user ? ( 
                <>
                    <Stack.Screen name="Login" component={Home} />
                    <Stack.Screen name="Cadastro" component={Cadastro} />
                </>
            ) : (
                <>
                    <Stack.Screen name="CyberPass" component={MeuPerfil} options={{headerShown: true, headerTitleAlign: 'center', headerStyle:{backgroundColor: 'black'}, headerTintColor: 'white', 
                    headerTitle: (props) => <HeaderTitle {...props}>Pass</HeaderTitle>,
                }}/>
                </>
            )}
        </Stack.Navigator>
    )
}

function MeuPerfil(){
    return (
        <TopTab.Navigator screenOptions={{tabBarStyle:{backgroundColor: 'black'}, tabBarActiveTintColor: 'white', tabBarPressColor: 'white', tabBarIndicatorStyle: {backgroundColor: 'white'}}}>
          <TopTab.Screen name="Pedidos" component={Pedidos} />
          <TopTab.Screen name="Dados" component={Dados} />
        </TopTab.Navigator>
      );
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

export default function Navigation() {
    return (
        <NavigationContainer>
            <TabComponent />
        </NavigationContainer>
    );
}


