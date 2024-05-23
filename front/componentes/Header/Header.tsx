import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View>
            <div style={styles.header}>

            </div>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      width: '100%',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
