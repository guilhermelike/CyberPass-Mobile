import { View, Text, StyleSheet, ImageBackground, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { IconButton } from 'react-native-paper';
import Card from '../../componentes/Card/Index';
import { useEventData } from '../../hooks/useEventData';
import { format } from 'date-fns/format';
import { parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Home = ({navigation}) => {
  const formatDate = (date) => {
    return format(parseISO(date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  };
  const [text, onChangeText] = React.useState('');
  const { data } = useEventData();
  const isChampionship = data?.filter(eventData => eventData.championship === true);
  const isEvent = data?.filter(eventData => eventData.championship === false);
  const groupedByCity = data?.reduce((acc, eventData) => {
    const city = eventData.city;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(eventData);
    return acc;
  }, {});

  return (
    <>
    <StatusBar style='light'></StatusBar>
    <View style={styles.container}>
    
      <View style={styles.header}>
        <Text style={styles.branco}>Cyber<Text style={styles.rosa}>Pass</Text></Text>
      </View>
      <ScrollView>
        <ImageBackground source={require('../../../assets/image2.png')} resizeMode='cover' style={styles.image}>
          <Text style={styles.titulo}>A Casa dos Esports</Text>
          <Text style={styles.subtitulo}>Por que assistir de casa quando você pode <Text style={{color: '#FF005C', fontWeight: '400'}}>vivenciar</Text></Text>
          {/* <View style={styles.inputicon}>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder='IEM Rio'></TextInput>
            <IconButton style={styles.icon} size={31.5} iconColor='black' icon="search-web" onPress={() => alert('trabalha pietrao')}></IconButton>
          </View> */}
        </ImageBackground>

        <ImageBackground source={require('../../../assets/background.png')} resizeMode='cover' style={{paddingBottom: 80}}>
          <View style={styles.campeonatos}>
            <Text style={styles.textcamp}>Campeonatos</Text>
            <View style={styles.containercard}>
              <ScrollView horizontal={true} contentContainerStyle={{display: 'flex', gap: 20, paddingRight: 70}} showsHorizontalScrollIndicator={false}>
                
              {isChampionship?.map((eventData) => (
                <TouchableOpacity onPress={() => navigation.navigate("Evento", { eventId: eventData.id })}>
                  <Card
                    key={eventData.id}
                    titulo={eventData.name}
                    imagemUri={eventData.image}
                    data={formatDate(eventData.date)}
                    onPress={()=> navigation.navigate("Evento")}
                  />
                  </TouchableOpacity>
                ))}
                
                {/*
                <TouchableOpacity onPress={() => navigation.navigate("Evento")}>
                <Card titulo="Valorant" data="15 Jun - 18 Jun"  onPress={() => navigation.navigate("Evento")}></Card>
                </TouchableOpacity>

                <Card navigation={navigation} titulo="IEM Rio 2024" data="11 Out - 13 Out" ></Card>
                <Card titulo="CBLOL" data="23 Ago"></Card>
                <Card titulo="GET Rio" data="02 Set - 03 Set" imagemUri={require("../../../assets/get.png")}></Card>
               */}
              </ScrollView>
            </View>
          </View>

          <View style={styles.campeonatos}>
            <Text style={styles.textcamp}>Eventos</Text>
            <View style={styles.containercard}>
              <ScrollView horizontal={true} contentContainerStyle={{display: 'flex', gap: 20, justifyContent: 'space-between', paddingRight: 70}} showsHorizontalScrollIndicator={false}>
                {isEvent?.map((eventData) => (
                  <TouchableOpacity onPress={() => navigation.navigate("Evento", { eventId: eventData.id })}>
                    <Card
                      key={eventData.id}
                      titulo={eventData.name}
                      imagemUri={eventData.image}
                      data={formatDate(eventData.date)}
                      onPress={()=> navigation.navigate("Evento")}
                    />
                  </TouchableOpacity>
              ))}
              </ScrollView>
            </View>
            
          </View>

          <View style={styles.campeonatos}>
            <Text style={styles.textcamp2}>Cidades</Text>
            {groupedByCity && Object.keys(groupedByCity).map((city) => (
            <View key={city}>
            <Text style={styles.subcamp}>{city}</Text>
            <View style={styles.containercard}>
            <ScrollView horizontal={true} contentContainerStyle={{display: 'flex', gap: 20, justifyContent: 'space-between', paddingRight: 70}} showsHorizontalScrollIndicator={false}>
              {groupedByCity[city].map((eventData: { championship: any; id: any; name: any; image: any; date: any; }) => (
                <TouchableOpacity onPress={() => navigation.navigate("Evento", { eventId: eventData.id })}>
                  <Card
                    key={eventData.id}
                    titulo={eventData.name}
                    imagemUri={eventData.image}
                    data={formatDate(eventData.date)}
                  />
                </TouchableOpacity>
              )
            )}
              </ScrollView>
              </View>
            </View>

            ))}
          
          </View>
          </ImageBackground>
        </ScrollView>

   
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
    alignItems: 'flex-start',
    paddingLeft: 10
  },
  containercard:{
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    width: '100%',
    justifyContent: 'space-around',
  },
  containercard2:{
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    width: '100%',
    justifyContent: 'space-around',
    paddingBottom: 60
  },
  card:{
    marginLeft: 10
  },
  textcamp:{
    color:'white',
    fontSize: 22,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10
  },
  textcamp2:{
    color:'white',
    fontSize: 22,
    fontWeight: '500',
    marginTop: 10,
  },
  subcamp:{
    color:'white',
    fontSize: 20,
    marginTop: 10,
  },
  subcamp2:{
    color:'white',
    fontSize: 20,
    marginTop: 10
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
    height: 250,
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  }
});

export default Home;