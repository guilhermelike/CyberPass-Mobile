import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import Ingresso from '../../componentes/Ingresso/Index';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useCarrinho } from '../../routes/CarrinhoContext';
import axios from 'axios';
import { API_URL } from '../../../api';

const API = API_URL + "/requests/";

const Carrinho = ({navigation, route}) => {
  
  const { eventos, adicionarEvento, removerEvento } = useCarrinho();

  useEffect(() => {
    if (route.params?.newEvent) {
      adicionarEvento(route.params.newEvent);
    }
  }, [route.params?.newEvent]);

  const valorTotalGeral = eventos.reduce((total, evento) => {
    const valorTotalInteira = evento.quantidadeInteira * evento.eventData.priceInteira;
    const valorTotalMeia = evento.quantidadeMeia * evento.eventData.priceMeia;
    return total + valorTotalInteira + valorTotalMeia;
  }, 0);

  
  const handlePagamento = async () => {
    try {
      const userId = 1; // Substitua com o CPF real do usuário logado
      const ticketId = 1; // Substitua com o ticketId real se disponível, e certifique-se que é um número
  
      const requests = eventos.map(evento => ({
          event: { id: evento.eventData.id },
          user: { id: userId }
      }));
  
      console.log("Enviando dados:", requests);
  
      const response = await axios.post(API, requests, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log("Resposta da API:", response.data);

      // Assumindo que response.data é um array de objetos de requests e que cada objeto possui um ID
      const requestId = response.data[0]?.id; // Obtenha o ID da primeira requisição, ajuste conforme necessário
  
      // Navegar para a tela de pagamento após a criação do request, passando o ID
      navigation.navigate("Pagamento", { eventos, requestId, userId });
    } catch (error) {
      if (error.response) {
        console.error("Erro ao criar o request:", error.response.data);
      } else {
        console.error("Erro ao criar o request:", error.message);
      }
    }
  };
  
  
  
  const temIngresso = eventos.length > 0;
  const isLoggedIn = true;

  if (temIngresso && isLoggedIn){
  return (
    <>
    <View style={Styles.container}>
      <ImageBackground source={require('../../../assets/background.png')} resizeMode='cover' style={{alignItems: 'center', width: '100%', height: '100%', justifyContent: 'center'}}>
        
        <View style={Styles.header}>
          <Text style={Styles.branco}>Cyber<Text style={Styles.rosa}>Pass</Text></Text>
        </View>

        <ScrollView contentContainerStyle={{width: '85%', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', flexDirection: 'row', paddingBottom: 80}}> 
          <View>
            <Text style={{fontSize: 20, color: 'white', marginLeft: 10, marginBottom: 5}}>Finalize seu pedido, <Text style={{color: '#ff005c', fontSize: 20}}>Guilherme</Text></Text>
            <View style={Styles.fundobranco}>
            {eventos.map((evento, index) => {
                  const { eventData, quantidadeInteira, quantidadeMeia } = evento;
                  const valorTotalInteira = quantidadeInteira * eventData.priceInteira;
                  const valorTotalMeia = quantidadeMeia * eventData.priceMeia;
                  return (
                    <>
                    <Ingresso
                      key={index}
                      evento={eventData.name}
                      local={eventData.location}
                      cidade={eventData.city}
                      data={format(parseISO(eventData.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR }).replace(/^\w/, (c) => c.toUpperCase())}
                      qtdInteira={quantidadeInteira}
                      valorInt={valorTotalInteira.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      qtdMeia={quantidadeMeia}
                      valorMeia={valorTotalMeia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      imagemUri={eventData.image}
                    />
                    <View style={{display: 'flex', alignItems: 'center'}}>
                      <TouchableOpacity onPress={() => removerEvento(eventData.id)} style={Styles.removerBotao}>
                            <Text style={Styles.removerBotaoText}>Remover</Text>
                      </TouchableOpacity>
                    </View>
                    </>
                  );
                })}
    
              <View style={{display: 'flex', flexDirection: 'row', backgroundColor: 'white', borderRadius: 15, paddingHorizontal: 15, paddingVertical: 10, borderTopWidth: 1,}}>
                
                <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  
                  <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'baseline'}}>
                    <Text style={{fontWeight: '700', fontSize: 16}}>Total:</Text>
                    <Text style={{color: '#FF005C', fontSize: 16, fontWeight: '700'}}>{valorTotalGeral.toLocaleString('pt-BR',{minimumFractionDigits: 2})}</Text>
                  </View>

                  <Text>O preço não inclui possíveis taxas.</Text>

                </View>    
                
              </View>
            
              <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', paddingBottom: 20}}>
                  <TouchableOpacity style={{backgroundColor: '#ff005c', padding: 12, borderRadius: 15, width: '80%'}} onPress={handlePagamento}>
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 17}}>Ir para o pagamento</Text>
                  </TouchableOpacity>
              </View>

            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
    </>
  )
} else if(temIngresso && !isLoggedIn){
  return (
    <>
    <View style={Styles.container}>
      <ImageBackground source={require('../../../assets/background.png')} resizeMode='cover' style={{alignItems: 'center', width: '100%', height: '100%'}}>
        
        <View style={Styles.header}>
          <Text style={Styles.branco}>Cyber<Text style={Styles.rosa}>Pass</Text></Text>
        </View>

        <ScrollView contentContainerStyle={{width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', flexDirection: 'row', paddingBottom: 80}}> 
          <View>
            <Text style={{fontSize: 20, color: 'white', marginLeft: 10, marginBottom: 5, textAlign: 'center'}}>Faça login para finalizar o seu pedido.</Text>
            <View style={Styles.fundobranco}>
            {eventos.map((evento, index) => {
                  const { eventData, quantidadeInteira, quantidadeMeia } = evento;
                  const valorTotalInteira = quantidadeInteira * eventData.priceInteira;
                  const valorTotalMeia = quantidadeMeia * eventData.priceMeia;
                  return (
                    <>
                    <Ingresso
                      key={index}
                      evento={eventData.name}
                      local={eventData.location}
                      cidade={eventData.city}
                      data={format(parseISO(eventData.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR }).replace(/^\w/, (c) => c.toUpperCase())}
                      qtdInteira={quantidadeInteira}
                      valorInt={valorTotalInteira.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      qtdMeia={quantidadeMeia}
                      valorMeia={valorTotalMeia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      imagemUri={eventData.image}
                    />
                    <View style={{display: 'flex', alignItems: 'center'}}>
                      <TouchableOpacity onPress={() => removerEvento(eventData.id)} style={Styles.removerBotao}>
                            <Text style={Styles.removerBotaoText}>Remover</Text>
                      </TouchableOpacity>
                    </View>
                    </>
                  );
                })} 
              <View style={{display: 'flex', flexDirection: 'row', backgroundColor: 'white', borderRadius: 15, paddingHorizontal: 15, paddingVertical: 10, borderTopWidth: 1,}}>
                
                <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  
                  <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'baseline'}}>
                    <Text style={{fontWeight: '700', fontSize: 16}}>Total:</Text>
                    <Text style={{color: '#FF005C', fontSize: 16, fontWeight: '700'}}>{valorTotalGeral.toLocaleString('pt-BR',{minimumFractionDigits: 2})}</Text>
                  </View>

                  <Text>O preço não inclui possíveis taxas.</Text>

                </View>
                
              </View>

              <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', paddingBottom: 20}}>
                  <TouchableOpacity style={{backgroundColor: '#ff005c', padding: 12, borderRadius: 15, width: '80%'}} onPress={()=> navigation.navigate("Login")}>
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 17}}>Ir para a tela de Login</Text>
                  </TouchableOpacity>
              </View>

            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
    </>
  )
}

return(
  <>
    <View style={Styles.container}>
      <ImageBackground source={require('../../../assets/background.png')} resizeMode='cover' style={{alignItems: 'center', width: '100%', height: '100%'}}>
        
        <View style={Styles.header}>
          <Text style={Styles.branco}>Cyber<Text style={Styles.rosa}>Pass</Text></Text>
        </View>

        <ScrollView contentContainerStyle={{width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', flexDirection: 'row'}}> 
          <View style={{padding: 15, backgroundColor: '#fff', borderRadius: 15, display: 'flex', gap: 10, alignItems: 'center', width: '100%', height: '100%', paddingBottom: 100}}>
            <Image source={require('../../../assets/triste.png')} resizeMode='contain' style={{height: '100%'}}></Image>
            <Text style={{textAlign: 'center', fontSize: 20, width: '100%', }}>Poxa! Nenhum ingresso adicionado no carrinho.</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
    </>
)
}

const Styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removerBotao: {
    backgroundColor: '#ff005c',
    padding: 10,
    textAlign: 'center',
    width: '50%',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center'
  },
  removerBotaoText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
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
  botao:{
    backgroundColor: '#ff005c',
    color: 'white',
    width: '80%',
    height: 50,
    display: 'flex',
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
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
  fundobranco:{
    backgroundColor: '#ffff',
    width: '100%',
    borderRadius: 15,
    borderBottomWidth: 1
  }
})

export default Carrinho;