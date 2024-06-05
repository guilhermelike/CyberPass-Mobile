import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

const Ingresso = (props: any) => {
    return (
      <View style={styles.container}>
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
          </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
      card:{
        width: 90,
        height: 90,
        borderRadius: 5
      },
      container:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        padding: 15,
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

export default Ingresso