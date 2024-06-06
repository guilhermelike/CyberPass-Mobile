import { View, Text, Button, StyleSheet, Image, ImageBackground, TextInput, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { IconButton } from 'react-native-paper';
import Card from '../../componentes/Card/Index';
import {Picker} from '@react-native-picker/picker';


const Evento = () => {
  const [text, onChangeText] = React.useState('');
const [selectedLanguage, setSelectedLanguage] = React.useState('');


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

        <Picker style={{backgroundColor: 'white', borderWidth: 5, borderColor: 'blue', borderRadius: 15, width: '80%'}}
        placeholder='Setor'
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
</Picker>
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