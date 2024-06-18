import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const Pedido = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const qrcode = (
    <View style={{ backgroundColor: 'white', width: 200, height: 300 }}>
          <Text style={styles.evento}>{props.evento}</Text>
          <Image source={require('../../../assets/qr.png')} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={{ fontWeight: '700' }}>Pedido <Text style={{ color: '#ff005c' }}>{props.pedido}</Text></Text>
        <Text style={{ fontWeight: '700' }}>Total: <Text style={{ color: '#ff005c' }}>{props.total}</Text></Text>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', gap: 10, width: '100%', paddingLeft: 20, paddingRight: 40, paddingBottom: 10 }}>
        <Image style={styles.card} source={props.imagemUri} />
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Text style={styles.evento}>{props.evento}</Text>
          <Text style={styles.info}>{props.local}</Text>
          <Text style={styles.info}>{props.data}</Text>
          <Text style={styles.info}>Ingressos: {props.qtd}</Text>

          <TouchableOpacity style={styles.botao} onPress={() => setModalVisible(true)}>
            <Text style={{ color: 'white' }}>QRCODE Ingresso(s)</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal */}
      <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)} backdropOpacity={0.7}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' }}>
          {qrcode}
          <TouchableOpacity style={{ marginTop: 20, backgroundColor: '#ff005c', padding: 10, borderRadius: 5 }} onPress={() => setModalVisible(false)}>
            <Text style={{ color: 'white' }}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  botao: {
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
  topo: {
    borderBottomWidth: 1,
    width: '100%',
    padding: 10,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    width: 120,
    height: 120,
    borderRadius: 5
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
  },
  evento: {
    color: 'black',
    fontSize: 17,
    fontWeight: '700'
  },
  info: {
    fontSize: 14,
    color: '#6B6B6B'
  }
});

export default Pedido;
