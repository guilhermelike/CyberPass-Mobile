import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CounterInput from 'react-native-counter-input';
import { Button, IconButton } from 'react-native-paper';
import CustomCounter from '../CustomCounter';

const Setor = (props: any) => {
  const [showButton, setShowButton] = React.useState(false);
  const [inteira, setInteira] = useState(props.quantityInteira);
  const [meia, setMeia] = useState(props.quantityMeia);
  const [quantidadeInteira, setQuantidadeInteira] = useState(0);
  const [quantidadeMeia, setQuantidadeMeia] = useState(0);
  const { eventData} = props;

  const handleCounterChange = (counter) => {
    console.log("onChange Counter:", counter);
    setShowButton(counter > 0);
  };

  useEffect(() => {
    setInteira(props.quantityInteira);
    setMeia(props.quantityMeia);
  }, [props.quantityInteira, props.quantityMeia]);

  const handleInteiraChange = (count: number) => {
    if (count <= props.quantityInteira) {
      setInteira(count);
    }
  };

  const handleMeiaChange = (count: number) => {
    if (count <= props.quantityMeia) {
      setMeia(count);
    }
  };

  const handleInteiraChangeText = (text) => {
    if (!/^\d+$/.test(text)) {
    setQuantidadeInteira((prev) => prev);
    }
  };

  const handleMeiaChangeText = () => {
    setQuantidadeMeia((prev) => prev);
  };

  return (
    <>
    <View style={styles.container} >
      <View style={{display: 'flex', flexDirection: 'column', paddingHorizontal: 10}}>
        <Text style={styles.titulo}>{props.titulo}</Text>
      </View>

    {props.quantityInteira > 0 ? (
      <View style={styles.ingresso}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={styles.subtitulo}>Inteira</Text>
            <Text style={styles.subtitulo}>-</Text>
            <Text style={styles.valor}>{props.valorint}</Text>
          </View>

          <CustomCounter
              value={quantidadeInteira}
              onChange={(count) => {
                setQuantidadeInteira(count);
                handleCounterChange(count);
              }}
              min={0}
              max={3}
              increaseButtonBackgroundColor={"#FF005C"}
              decreaseButtonBackgroundColor={"#FF005C"}
            />
        </View>
    ) : (
      <View style={styles.ingresso}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={styles.subtitulo}>Inteira</Text>
            <Text style={styles.subtitulo}>-</Text>
            <Text style={styles.valor}>Ingressos esgotados!</Text>
          </View>
        </View>
    )}

    {props.quantityMeia > 0 ? (
        <View style={styles.ingresso}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={styles.subtitulo}>Meia</Text>
            <Text style={styles.subtitulo}>-</Text>
            <Text style={styles.valor}>{props.valormeia}</Text>
          </View>

          <CustomCounter
              value={quantidadeMeia}
              onChange={(count) => {
                setQuantidadeMeia(count);
                handleCounterChange(count);
              }}
              min={0}
              max={3}
              increaseButtonBackgroundColor={"#FF005C"}
              decreaseButtonBackgroundColor={"#FF005C"}
            />

        </View>
      ) : (
      <View style={styles.ingresso}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={styles.subtitulo}>Meia</Text>
            <Text style={styles.subtitulo}>-</Text>
            <Text style={styles.valor}>Ingressos esgotados!</Text>
          </View>
        </View>
)}
    </View>
    
    {showButton && (
       <TouchableOpacity style={styles.botao} onPress={
       ()=>props.navigation.navigate("FluxoPedido", {screen: 'Carrinho', params: {newEvent: {eventData: eventData, quantidadeInteira: quantidadeInteira, quantidadeMeia: quantidadeMeia}}})}>
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
    width: '70%',
    padding: 15,
    borderRadius: 15
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
    width: '45%',
    height: '80%',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 0
    
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
      fontSize: 22,
      color: 'black'
    },
    valor: {
      fontSize: 20,
      color: '#FF005C'
    }
});

export default Setor