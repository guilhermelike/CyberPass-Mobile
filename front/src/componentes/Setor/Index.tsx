import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import CounterInput from 'react-native-counter-input';
import { Button, IconButton } from 'react-native-paper';

const Setor = (props: any) => {
  const [showButton, setShowButton] = React.useState(false);

  const handleCounterChange = (counter) => {
    console.log("onChange Counter:", counter);
    setShowButton(counter > 0);
  };


  return (
    <>
    <View style={styles.container} >
      <View style={{display: 'flex', flexDirection: 'column', paddingHorizontal: 10}}>
        <Text style={styles.titulo}>{props.titulo}</Text>
      </View>

      <View style={styles.ingresso}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={styles.subtitulo}>Inteira</Text>
            <Text style={styles.subtitulo}>-</Text>
            <Text style={styles.valor}>{props.valorint}</Text>
          </View>

          <CounterInput onChange={handleCounterChange} min={0} horizontal={true} increaseButtonBackgroundColor="#FF005C" decreaseButtonBackgroundColor="#FF005C" reverseCounterButtons={true} style={styles.counter}/>
        </View>

        <View style={styles.ingresso}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={styles.subtitulo}>Meia</Text>
            <Text style={styles.subtitulo}>-</Text>
            <Text style={styles.valor}>{props.valormeia}</Text>
          </View>

          <CounterInput onChange={handleCounterChange} min={0} horizontal={true} increaseButtonBackgroundColor="#FF005C" decreaseButtonBackgroundColor="#FF005C" reverseCounterButtons={true} style={styles.counter}/>

        </View>

    </View>
    {showButton && (
       <TouchableOpacity style={styles.botao} onPress={() => console.log('Botão Pressionado!')}>
        <Text style={styles.botaoText}>Adicionar ao Carrinho!</Text>
       </TouchableOpacity>
      )}
</>
  )
}

const styles = StyleSheet.create({
  botao:{
    backgroundColor: '#ff005c',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    padding: 15,
    borderRadius: 5
  },
  botaoText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  ingresso:{
    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 10, verticalAlign: 'middle'
  },
  counter:{
    width: '50%',
    height: 50,
    borderWidth: 1,
  },
    card:{
      width: 150,
      height: 150,
      borderRadius: 5
    },
    container:{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      borderRadius: 15, 
      width: '90%'
    },
    titulo:{
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      paddingTop: 10
    },
    subtitulo:{
      fontSize: 20,
      color: 'black'
    },
    valor: {
      fontSize: 18,
      color: '#FF005C'
    }
});

export default Setor