import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Card = (props: any) => {

  return (
    <View style={styles.container} >
        <Image style={styles.card} source={{uri: props.imagemUri}}></Image>
        <Text style={styles.titulo}>{props.titulo}</Text>
        <Text style={styles.subtitulo}>{props.data}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
      width: 150,
      height: 150,
      borderRadius: 5
    },
    container:{
      display: 'flex',
      flexDirection: 'column'
    },
    titulo:{
      color: 'white',
      fontSize: 17
    },
    subtitulo:{
      fontSize: 14,
      color: '#00ffa3'
    }
});

export default Card