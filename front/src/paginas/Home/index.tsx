import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TabTypes } from '../../routes/Tab';

const Home = () => {
  const navigation = useNavigation<TabTypes>();

  return (
    <View style={{marginTop: 60}}>
      <Text style={{textAlign: "center"}}>Home</Text>
      <Button title="Fazer Login"
      onPress={() => {
        navigation.navigate("Login");
      }}>      
      </Button>
    </View>
  )
}

export default Home;