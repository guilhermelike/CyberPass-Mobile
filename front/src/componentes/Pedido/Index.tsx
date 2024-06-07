import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const Pedido = (props: any) => {
    return (
      <View style={styles.container}>
        <View style={styles.topo}>
            <Text style={{fontWeight: 700}}>Pedido <Text style={{color: '#ff005c'}}>{props.pedido}</Text></Text>
            <Text style={{fontWeight: 700}}>Total: <Text style={{color: '#ff005c'}}>{props.total}</Text></Text>
          </View>
          
          <View style={{display: 'flex', flexDirection: 'row', gap: 10, width: '100%', paddingHorizontal: 10, paddingBottom: 10}}>
            <Image style={styles.card} source={props.imagemUri}></Image>
            
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <Text style={styles.evento}>{props.evento}</Text>
              <Text style={styles.info}>{props.local}</Text>
              <Text style={styles.info}>{props.data}</Text>
            
              <View style={{display: 'flex', flexDirection: 'row', gap: 5}}>    
                <Text style={styles.info}>{props.qtd}</Text>
                <Text>-</Text>
                <Text style={styles.info}>{props.valor}</Text>
              </View>
              
              <TouchableOpacity style={styles.botao} onPress={()=> alert('meu amor lindona')}>
                <Text style={{color: 'white'}}>Visualizar o pedido</Text>
              </TouchableOpacity>
            </View> 
        
        </View>
      
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    botao:{
      backgroundColor: '#ff005c',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: 10,
      marginTop: 15,
      borderRadius: 15
    },
      topo:{
        borderBottomWidth: 1, width: '100%', padding: 10, borderTopRightRadius: 15, borderTopLeftRadius: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
      },
      card:{
        width: '50%',
        height: '100%',
        borderRadius: 5
      },
      container:{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        gap: 10
      },
      evento:{
        color: 'black',
        fontSize: 17,
        fontWeight: '700'
      },
      info:{
        fontSize: 14,
        color: '#6B6B6B'
      }
  });

export default Pedido