import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ingresso from '../../componentes/Ingresso/Index';
import { TextInputMask } from 'react-native-masked-text';
import DropdownComponent from '../../componentes/Dropdown/Index';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import { API_URL } from '../../../api';
import { format } from 'date-fns/format';

const isLoggedIn = false;

const Pagamento = ({navigation, route}) => {
  const { eventos, requestId, userId, setEventos} = route.params;

  const [cpf, setCpf] = useState('');
  const [cartao, setCartao] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');
  const [numero, setNumero] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const [CEP, setCEP] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [complemento, setComplemento] = useState('');
  const [referencia, setReferencia] = useState('');
  const [pais, setPais] = useState('');
  const [modoEdicao, setModoEdicao] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const dataDropdown = [
    { label: 'Pix', value: 'opcao1' },
    { label: 'Cartão de Crédito', value: 'opcao2' },
  ];

  const [inputsHabilitados, setInputsHabilitados] = useState(false);
  const [isPaymentButtonEnabled, setIsPaymentButtonEnabled] = useState(false);
  const [isFinalizarButtonEnable, setIsFinalizarButtonEnable] = useState(false);
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(API_URL + `/users/${userId}`);
        const userData = response.data;
        console.log(userData);
        setNome(userData.name);
        setSobrenome(userData.lastname);
        setEmail(userData.email);
        setCpf(userData.cpf);
        setData(formatarData(userData.birthday));
        setNumero(userData.tel);
        setCidade(userData.city);
        setBairro(userData.neighbourhood);
        setComplemento(userData.complement);
        setReferencia(userData.refpoint);
        setUf(userData.uf);
        setPais(userData.country);
        if (userData.cep) {
          setCEP(userData.cep);
        } else {
          console.warn('CEP não encontrado na resposta da API');
          setCEP('');
        }        console.log(userData.cep);
        setEndereco(userData.address);
      } catch (error) {
        console.error("Erro ao buscar informações do usuário:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const formatarData = (data) => {
    if (!data) return '';
    return format(new Date(data), 'dd/MM/yyyy');
  };

  useEffect(() => {
    console.log("CEP atualizado:", CEP);
  }, [CEP]);

  useEffect(() => {
    validateFields();
  }, [nome, sobrenome, email, cpf, data, numero, CEP, endereco, bairro, cidade, uf, pais]);

  useEffect(() => {
    validatePayment();
  }, [cartao, mes, ano, selectedOption]);

  const validateFields = () => {
    if (
      nome && sobrenome && email && cpf && data && numero &&
      CEP && endereco && bairro && cidade && uf && pais

    ) {
      setIsPaymentButtonEnabled(true);
    } else {
      setIsPaymentButtonEnabled(false);
    }
  };

  const validatePayment = () => {
    if (
      (selectedOption === 'opcao1') || 
      (selectedOption === 'opcao2' && cartao && mes && ano)
    ) {
      setIsFinalizarButtonEnable(true);
    } else {
      setIsFinalizarButtonEnable(false);

    }
  };


  // const buscarEnderecoPorCep = async () => {
  //   try {
  //     const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  //     const data = await response.json();
  //     if (!data.erro) {
  //       setEndereco(data.logradouro);
  //       setBairro(data.bairro);
  //       setCidade(data.localidade);
  //       setUf(data.uf);
  //       setPais('Brasil');
  //     } else {
  //       console.error('CEP não encontrado');
  //     }
  //   } catch (error) {
  //     console.error('Erro ao buscar endereço:', error);
  //   }
  // };

  const Voltar = () => {
      setModoEdicao(false);
} 

const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

  const finalizar = () => {
    setPedidoFinalizado(true);
  };

  const irParaPagamento = () => {
    setModoEdicao(true);
  };

  const valorTotalGeral = eventos.reduce((total, evento) => {
    const valorTotalInteira = evento.quantidadeInteira * evento.eventData.priceInteira;
    const valorTotalMeia = evento.quantidadeMeia * evento.eventData.priceMeia;
    return total + valorTotalInteira + valorTotalMeia;
  }, 0);

  return (
    <>
    <View style={Styles.container}>
      <ImageBackground source={require('../../../assets/background.png')} resizeMode='cover' style={{alignItems: 'center', width: '100%', height: '100%'}}> 
        <View style={Styles.header}>
          <Text style={Styles.branco}>Cyber<Text style={Styles.rosa}>Pass</Text></Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', flexDirection: 'column', paddingBottom: 80}}> 
          <View style={Styles.fundobranco}>
            <Text style={{paddingLeft: 15, paddingTop: 10, fontSize: 18, fontWeight: 600}}>Informações do pedido: <Text style={{color: '#ff005c'}}>{requestId}</Text></Text>
            {eventos.map((evento, index) => {
                const { eventData, quantidadeInteira, quantidadeMeia } = evento;
                const valorTotalInteira = quantidadeInteira * eventData.priceInteira;
                const valorTotalMeia = quantidadeMeia * eventData.priceMeia;
                return (
                  <Ingresso
                    key={index}
                    evento={eventData.name}
                    local={eventData.location}
                    cidade={eventData.city}
                    data={eventData.date}
                    qtdInteira={quantidadeInteira}
                    valorInt={valorTotalInteira.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    qtdMeia={quantidadeMeia}
                    valorMeia={valorTotalMeia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    imagemUri={eventData.image}
                  />
                );
              })}
            <View style={{display: 'flex', flexDirection: 'row', backgroundColor: 'white', borderRadius: 15, paddingHorizontal: 15, paddingVertical: 10, borderTopWidth: 1,}}>
              
              <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                
                <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'baseline'}}>
                  <Text style={{fontWeight: '700', fontSize: 16}}>Total:</Text>
                  <Text style={{color: '#FF005C', fontSize: 16, fontWeight: '700'}}>{valorTotalGeral.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</Text>
                </View>

              </View>
              
            </View>

            </View>

          <View style={{backgroundColor: 'white', borderRadius: 15, padding: 10, marginTop: 20, paddingBottom: 20}}>
            
          {pedidoFinalizado ? (
            <>
              <Text style={{fontWeight: 500, fontSize: 24, textAlign: 'center'}}>Pagamento aprovado!</Text>
              <View style={{width:275, height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../../../assets/certo.png')} style={{height: '100%', width: '50%'}}></Image>
              </View>
              <Text style={{fontWeight: 500, fontSize: 19, textAlign: 'center'}}>Você pode visualizar seu pedido em "Meus Pedidos"</Text>
              <View style={{display: 'flex', alignItems: 'center', marginTop: 15}}>
                
              </View>
            </>
          ) :
          !modoEdicao ? (
            <>
            <Text style={{ paddingTop: 5, paddingBottom: 10, fontSize: 18, fontWeight: 600}}>Preencha os campos obrigatórios.</Text>
              <View style={Styles.campo2}>
                <View >
                  <Text style={Styles.label}>Nome:*</Text>
                  <TextInput style={Styles.inputmetade} value={nome} onChangeText={text => setNome(text)}></TextInput>
                </View>

                <View>
                  <Text style={Styles.label}>Sobrenome:*</Text>
                  <TextInput style={Styles.inputmetade} value={sobrenome} onChangeText={text => setSobrenome(text)} placeholder='Batista'></TextInput>
                </View>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>Email:*</Text>
                <TextInput style={Styles.input} textContentType='emailAddress' value={email} onChangeText={text => setEmail(text)} placeholder='triplogamer@gmail.com'></TextInput>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>CPF:*</Text>
                <TextInputMask 
                style={[Styles.input, Styles.inputDesabilitado]}
                type={'cpf'}
                value={cpf}
                onChangeText={text => setCpf(text)} 
                placeholder='111.111.111-11'
                editable={false}/>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>Data de Nascimento:*</Text>
                <TextInputMask 
              
                type={'datetime'}
                value={data}
                onChangeText={text => setData(text)}
                maxLength={10}
                placeholder='11/11/2011'
                style={Styles.input}/>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>Telefone:*</Text>
                <TextInputMask 
              
                type={'cel-phone'}
                value={numero}
                onChangeText={text => setNumero(text)}
                maxLength={14}
                placeholder='(41)99999-9999'
                style={Styles.input}/>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>Endereço:*</Text>
                <TextInput value={endereco} onChangeText={text => setEndereco(text)} style={Styles.input} placeholder='Endereço...'></TextInput>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>Complemento:</Text>
                <TextInput style={Styles.input} value={complemento} onChangeText={text => setComplemento(text)} placeholder='Complemento...'></TextInput>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>Bairro:*</Text>
                <TextInput style={Styles.input} value={bairro} onChangeText={text => setBairro(text)} placeholder='Bairro...'></TextInput>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>Cidade:*</Text>
                <TextInput style={Styles.input} value={cidade} onChangeText={text => setCidade(text)} placeholder='Cidade...'></TextInput>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>Ponto de Referência:</Text>
                <TextInput style={Styles.input} value={referencia} onChangeText={text => setReferencia(text)} placeholder='Referência...'></TextInput>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>UF:*</Text>
                <TextInput style={Styles.input} value={uf} onChangeText={text => setUf(text)} placeholder='UF...'></TextInput>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>País:*</Text>
                <TextInput style={Styles.input} value={pais} onChangeText={text => setPais(text)} placeholder='País...'></TextInput>
              </View>
              </>
          ) : (
            <>
            <Text style={{fontSize: 19, fontWeight: 500, marginBottom: 10}}>Forma de Pagamento</Text>
            <Dropdown
              style={Styles.dropdown}
              placeholderStyle={Styles.placeholderStyle}
              selectedTextStyle={Styles.selectedTextStyle}
              data={dataDropdown}
              labelField="label"
              valueField="value"
              placeholder="Selecione uma opção"
              value={selectedOption}
              onChange={item => setSelectedOption(item.value)}
            />
            </>
          )}

            {selectedOption === 'opcao2' && (
              <>
                <View style={Styles.campo}>
                  <Text style={Styles.label}>Número do cartão:</Text>
                  <TextInputMask
                    type={'credit-card'}
                    options={{
                      issuer: 'visa-or-mastercard'
                    }}
                    value={cartao}
                    onChangeText={text => setCartao(text)}
                    placeholder='1111 1111 1111 1111'
                    style={Styles.input}
                  />
                </View>

                <View style={Styles.campo}>
                <Text style={Styles.label}>Nome do titular do cartão:</Text>
                <TextInput
                  placeholder='Peter Parker'
                  style={Styles.input}
                />
                </View>

                <View style={{display: 'flex', flexDirection: 'row', width: '100%', gap: 20}}>
                  <View>
                    <Text style={Styles.label}>Válido até:</Text>
                    <View style={Styles.campo2}>
                      <TextInputMask
                        type={'datetime'}
                        options={{
                          format: 'MM/YY'
                        }}
                        value={mes}
                        onChangeText={text => setMes(text)}
                        style={Styles.inputmetade}
                        placeholder='Mês/Ano'
                        
                      />
                    </View>
                  </View>

                  <View>
                    <Text style={Styles.label}>CVV:</Text>
                    <View style={Styles.campo2}>
                      <TextInputMask
                        type={'only-numbers'}
                        maxLength={3}
                        value={ano}
                        onChangeText={text => setAno(text)}
                        style={Styles.inputmetade}
                        placeholder='111'

                      />
                    </View>
                  </View>
                </View>
              </>
            )}

              {!modoEdicao ? (
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>              
                <View style={{marginTop: 15, justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                <TouchableOpacity onPress={irParaPagamento} style={[Styles.botao3, !isPaymentButtonEnabled && { backgroundColor: '#ccc' }]} disabled={!isPaymentButtonEnabled}>
                <Text style={{ color: 'white', fontSize: 18 }}>Pagamento</Text>
                  </TouchableOpacity>
                </View>
                </View>
              ) : modoEdicao && !pedidoFinalizado ? (
                <>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10}}>              
                 <View style={{marginTop: 20}}>
                   <TouchableOpacity onPress={Voltar} style={Styles.botao2}>
                     <Text style={{ color: 'white', fontSize: 18 }}>Voltar</Text>
                   </TouchableOpacity>
                 </View>
                 <View style={{marginTop: 20}}>
                   <TouchableOpacity onPress={finalizar} style={[Styles.botao2, !isFinalizarButtonEnable && { backgroundColor: '#ccc' }]} >
                     <Text style={{ color: 'white', fontSize: 18 }} >Finalizar</Text>
                   </TouchableOpacity>
                 </View>
                 </View>
               </>
              ) : (
                <></>
              )}

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
    display: 'flex',
    flexDirection: 'column'
  },dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  botao2:{
    backgroundColor: '#ff005c',
    color: 'white',
    height: 50,
    width: 150,
    display: 'flex',
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    borderRadius: 15
  },
  botao3:{
    backgroundColor: '#ff005c',
    color: 'white',
    height: 50,
    width: 230,
    display: 'flex',
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    borderRadius: 15
  },
  metade:{
    width: '50%'
  },
  inputDesabilitado: {
    backgroundColor: '#ccc', 
    color: 'black', 
  },
  campo2:{
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  input:{
    width: 320,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF005C',
    color: 'black'
  },
  inputmetade:{
    width: 150,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF005C',
    color: 'black',
  },
  campo:{
    display: 'flex'
  },
  label:{
    color: 'black',
    fontSize: 18,
    marginBottom: 5
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
    padding: 5,
    borderRadius: 15,
    borderBottomWidth: 1,
  }
})

export default Pagamento;

