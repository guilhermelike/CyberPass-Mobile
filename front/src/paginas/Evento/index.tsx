import { View, Text, Button, StyleSheet, Image, ImageBackground, TextInput, ScrollView} from 'react-native'
import React from 'react'
import CounterInput from "react-native-counter-input";
import { StatusBar } from 'expo-status-bar';
import Setor from '../../componentes/Setor/Index';


const Evento = () => {

  return (
    <>
    <StatusBar style='light'></StatusBar>
    <ImageBackground source={require('../../../assets/background.png')} resizeMode='cover' style={styles.container}>
    
      <View style={styles.header}>
        <Text style={styles.branco}>Cyber<Text style={styles.rosa}>Pass</Text></Text>
      </View>

      <ScrollView style={{width: '100%'}}>

      <View style={styles.cardimagem}>
          <ImageBackground source={require('../../../assets/valorantestadio.jpg')} resizeMode='cover' style={styles.image}>
            <Text style={styles.titulo}>Valorant Masters</Text>
            <Text style={styles.subtitulo}>Presencie os melhores jogadores de valorant em busca do grande título!</Text>
          </ImageBackground>
      </View>  

      <View style={styles.infos}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Informações do Campeonato{/* Ao inves de ser estatico deve trazer se é CAMPEONATO ou EVENTO após o "informações do" */}</Text>
        <View style={{display: 'flex', gap: 5}}>
          <Text style={styles.subinfo}>Local: Ibirapuera, São Paulo, São Paulo</Text>
          <Text style={styles.subinfo}>Data(s): 15 de Junho - 16 de Junhos</Text>
        </View>
      </View>

      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15, paddingBottom: 80}}>
        <Setor titulo="Pista Premium" valorint="300,00" valormeia="150,00"></Setor>
        <Setor titulo="Arquibancada" valorint="150,00" valormeia="75,00"></Setor>
      </View>


        </ScrollView>
    </ImageBackground>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'red',
    alignItems: 'center',

  },
  cardimagem:{
    display: 'flex',
    alignItems:'center',
    width: '100%',
  },
  infos:{
     padding: 15,
    display: 'flex',
    gap: 5,
    marginBottom: 20
  },
  subinfo:{
    color: 'white',
    fontSize: 16
  },
  titulo: {
    color: '#fff',
    marginTop: 20,
    fontSize: 35,
    fontWeight: '400',
  },
  subtitulo:{
    color: '#fff',
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
    padding: 15,
  },
  header:{
    height: '10%',  
    width: '100%',
    marginTop: 10,
    marginBottom: -10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rosa:{
    color: '#FF005C',
    fontSize: 25,
    fontWeight: '400'
  },
  branco:{
      color: '#FFF',
      fontSize: 25,
      fontWeight: '300'
  },
  image:{

    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: 210
  },
  image2:{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  }
});

export default Evento;