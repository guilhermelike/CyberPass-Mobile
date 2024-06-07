import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Pedido from '../../componentes/Pedido/Index'

const Pedidos = () => {
  return (
    <View>
    <ImageBackground source={require('../../../assets/background.png')} resizeMode='cover' style={{alignItems: 'center', width: '100%', height: '100%'}}>
        <View style={{backgroundColor: 'white', borderRadius: 15, width: '90%', marginTop: 25}}>
            <Pedido evento="Valorant Masters" local="São Paulo - Ibirapuera" data="09 Maio - 10 Maio" qtd="1 Ingresso" valor="150,00" pedido="777" total="150,00" imagemUri={require("../../../assets/valorant.png")}></Pedido>
        </View>
    </ImageBackground>
    </View>
  )
}

export default Pedidos