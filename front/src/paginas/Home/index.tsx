import { View, Text, Button, StyleSheet, Image, ImageBackground, TextInput} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TabTypes } from '../../routes/Tab';
import { StatusBar } from 'expo-status-bar';
import { IconButton } from 'react-native-paper';
import Card from '../../componentes/Card/Index';

const Home = () => {
  const navigation = useNavigation<TabTypes>();
  const [text, onChangeText] = React.useState('');

  return (
    <>
    <StatusBar style='light'></StatusBar>
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.branco}>Cyber<Text style={styles.rosa}>Pass</Text></Text>
      </View>

        <ImageBackground source={require('../../../assets/image2.png')} resizeMode='cover' style={styles.image}>
          <Text style={styles.titulo}>A Casa dos Esports</Text>
          <Text style={styles.subtitulo}>Por quê assistir de casa quando você pode <Text style={{color: '#FF005C', fontWeight: '400'}}>vivenciar</Text></Text>
          <View style={styles.inputicon}>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder='IEM Rio'></TextInput>
            <IconButton style={styles.icon} size={31.5} iconColor='black' icon="search-web" onPress={() => alert('trabalha pietrao')}></IconButton>
          </View>
        </ImageBackground>

        <View style={styles.campeonatos}>
          <Text style={styles.textcamp}>Campeonatos:</Text>
          <View style={styles.containercard}>
            <Card></Card>
            <Card></Card>

          </View>
        </View>

   
      {/*<Button title="Fazer Login"
      onPress={() => {
        navigation.navigate("Usuario");
      }}>      
    </Button>*/}
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  campeonatos:{
    display: 'flex',
    backgroundColor: 'rgba(',
    width: '100%',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start'
  },
  containercard:{
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    width: '100%',
    justifyContent: 'space-around',
  },
  textcamp:{
    color:'white',
    fontSize: 22,
    fontWeight: '500',
    marginTop: 5,
    marginBottom: 10
  },
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  titulo: {
    color: '#fff',
    marginTop: 50,
    fontSize: 35,
    fontWeight: '400'
  },
  subtitulo:{
    color: '#fff',
    fontSize: 25,
    fontWeight: '300',
    textAlign: 'center',
    padding: 15
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
  input:{
    backgroundColor: 'white',
    width: 250,
    padding: 10,
    borderRadius: 5,
  },
  inputicon:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 10
  },
  icon:{
    backgroundColor: 'white',
    padding: 0,
    borderRadius: 5,
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
    height: 350,
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  }
});

export default Home;