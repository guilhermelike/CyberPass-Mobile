import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View>
            <View style={styles.header}>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rosa:{
        color: '#FF005C'
    },
    branco:{
        color: '#FFF'
    }
  });
