import 'react-native-gesture-handler';
import React from "react";
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import TabComponent from './src/routes/Tab';
import Navigation from './src/routes/Tab';
import { AuthProvider } from './src/routes/Auth';

export default function App(){
  return(
    <AuthProvider>
        <Navigation />
    </AuthProvider>

  );
}