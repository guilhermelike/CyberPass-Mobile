import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/Tab';

const Carrinho = () => {
  const navigation = useNavigation<StackTypes>();
  return (
    <View style={{marginTop: 60}}>
      <Text style={{textAlign: "center"}}>Carrinho</Text>

      <Button title="Fazer Login"
      onPress={() => 
        navigation.navigate("Cadastro")
      }>      
    </Button>
    </View>
  )
}

export default Carrinho;