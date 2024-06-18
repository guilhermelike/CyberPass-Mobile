import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import Pedido from '../../componentes/Pedido/Index';
import axios from 'axios';
import { API_URL } from '../../../api';
import { format, formatDate } from 'date-fns/format';
import { parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    // Função para buscar os pedidos da API
    const fetchPedidos = async () => {
      try {
        const response = await axios.get(API_URL + '/requests'); // Endpoint da API para buscar os pedidos
        const data = response.data;
        setPedidos(data);
        console.log(response.data); // Atualiza o estado com os pedidos obtidos da API
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    };

    fetchPedidos();
  }, []);

  const formatDate = (date) => {
    return format(parseISO(date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/background.png')} resizeMode='cover' style={{ alignItems: 'center', width: '100%',  height: '100%' }}>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>
          {pedidos.map((pedido, index) => (
            <View key={index} style={{ backgroundColor: 'white', borderRadius: 15, width: '90%', marginTop: 25 }}>
              { <Pedido
                evento={pedido.event.name} 
                local={pedido.event.location} 
                data={formatDate(pedido.event.date)}
                qtd={pedido.quantidadeTotal}
                pedido={pedido.id.toString()} 
                total={`R$ ${pedido.preçoTotal}`} 
                imagemUri={{ uri: pedido.event.image }} 
              /> }
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Pedidos;
