import { View, Text, Button, StyleSheet, Image, ImageBackground, TextInput, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import CounterInput from "react-native-counter-input";
import { StatusBar } from 'expo-status-bar';
import Setor from '../../componentes/Setor/Index';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';


const Evento = ({navigation}) => {
  const route = useRoute();
  const eventId = route.params?.eventId;

  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    if (eventId) {
      axios.get(`http://192.168.18.7:8080/events/${eventId}`)
      .then(response => {
        setEventData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar detalhes do evento:', error);
      });
  }
}, [eventId]); // Executa o efeito sempre que o eventId mudar

if (!eventData) {
  return (
    <View>
      <Text>Carregando...</Text>
    </View>
  );
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

  return (
    <>
    <StatusBar style='light'></StatusBar>
    <ImageBackground source={require('../../../assets/background.png')} resizeMode='cover' style={styles.container}>
    
      <View style={styles.header}>
        <Text style={styles.branco}>Cyber<Text style={styles.rosa}>Pass</Text></Text>
      </View>

      <ScrollView style={{width: '100%'}}>

      <View style={styles.cardimagem}>
          <ImageBackground source={{uri: eventData.image}} resizeMode='cover' style={styles.image}>
            <Text style={styles.titulo}>{eventData.name}</Text>
            <Text style={styles.subtitulo}>Presencie os melhores jogadores de valorant em busca do grande título!</Text>
          </ImageBackground>
      </View>  

      <View style={styles.infos}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Informações do Campeonato{/* Ao inves de ser estatico deve trazer se é CAMPEONATO ou EVENTO após o "informações do" */}</Text>
        <View style={{display: 'flex', gap: 5}}>
          <Text style={styles.subinfo}>Local: {eventData.location}, {eventData.city}</Text>
          <Text style={styles.subinfo}>Data(s): {format(parseISO(eventData.date), "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR }).replace(/^\w/, (c) => c.toUpperCase())}</Text>
        </View>
      </View>

      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15, paddingBottom: 80}}>
        <Setor titulo="Ingressos" navigation={navigation} quantityInteira={eventData.quantityInteira} quantityMeia={eventData.quantityMeia}  valorint={eventData.priceInteira.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} valormeia={eventData.priceMeia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} eventData={eventData}></Setor>
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