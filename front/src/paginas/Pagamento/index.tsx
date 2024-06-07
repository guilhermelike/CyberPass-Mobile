import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ingresso from '../../componentes/Ingresso/Index';
import { TextInputMask } from 'react-native-masked-text';
import DropdownComponent from '../../componentes/Dropdown/Index';
import { Dropdown } from 'react-native-element-dropdown';

const isLoggedIn = false;

const Pagamento = ({navigation}) => {
  const [cpf, setCpf] = useState('');
  const [data, setData] = useState('');
  const [numero, setNumero] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [pais, setPais] = useState('');
  const [modoEdicao, setModoEdicao] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const dataDropdown = [
    { label: 'Pix', value: 'opcao1' },
    { label: 'Cartão de Crédito - Até 6x', value: 'opcao2' },
  ];

  const [inputsHabilitados, setInputsHabilitados] = useState(false);

  const buscarEnderecoPorCep = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setEndereco(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setUf(data.uf);
        setPais('Brasil');
      } else {
        console.error('CEP não encontrado');
      }
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    }
  };

  const Voltar = () => {
      setModoEdicao(false);
} 

  const finalizar = () => {
    setModoEdicao(false);
    setInputsHabilitados(true);
  };

  const irParaPagamento = () => {
    setModoEdicao(true);
  };

  return (
    <>
    <View style={Styles.container}>
      <ImageBackground source={require('../../../assets/background.png')} resizeMode='cover' style={{alignItems: 'center', width: '100%', height: '100%'}}> 
        <View style={Styles.header}>
          <Text style={Styles.branco}>Cyber<Text style={Styles.rosa}>Pass</Text></Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', flexDirection: 'column', paddingBottom: 80}}> 
          <View style={Styles.fundobranco}>
            <Text style={{paddingLeft: 15, paddingTop: 10, fontSize: 18, fontWeight: 600}}>Informações do pedido</Text>
            <Ingresso evento="Valorant Masters" local="São Paulo - Ibirapuera" data="09 Maio - 10 Maio" qtd="1 Ingresso" tipo="Inteira" valor="150,00"  imagemUri={require("../../../assets/valorant.png")}></Ingresso>
            <Ingresso evento="IEM Rio 2024" local="Rio de Janeiro - Arena Jeunesse" data="15 Jun - 18 Jun" qtd="1 Ingresso" valor="150,00" tipo="Meia"  imagemUri={require("../../../assets/iem.png")}></Ingresso>
            
            <View style={{display: 'flex', flexDirection: 'row', backgroundColor: 'white', borderRadius: 15, paddingHorizontal: 15, paddingVertical: 10, borderTopWidth: 1,}}>
              
              <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                
                <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'baseline'}}>
                  <Text style={{fontWeight: '700', fontSize: 16}}>Total:</Text>
                  <Text style={{color: '#FF005C', fontSize: 16, fontWeight: '700'}}>300,00</Text>
                </View>

              </View>
              
            </View>

            </View>

          <View style={{backgroundColor: 'white', borderRadius: 15, padding: 10, marginTop: 20, paddingBottom: 20}}>
            
          {!modoEdicao ? (
            <>
            <Text style={{ paddingTop: 5, paddingBottom: 10, fontSize: 18, fontWeight: 600}}>Preencha os campos obrigatórios.</Text>
              <View style={Styles.campo2}>
                <View >
                  <Text style={Styles.label}>Nome:*</Text>
                  <TextInput style={Styles.inputmetade} placeholder='Marcelo'></TextInput>
                </View>

                <View>
                  <Text style={Styles.label}>Sobrenome:*</Text>
                  <TextInput style={Styles.inputmetade} placeholder='Batista'></TextInput>
                </View>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>Email:*</Text>
                <TextInput style={Styles.input} textContentType='emailAddress' placeholder='triplogamer@gmail.com'></TextInput>
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
                <Text style={Styles.label}>CEP:*</Text>
                <TextInputMask 
              
                type={'zip-code'}
                maxLength={9}
                value={cep}
                onChangeText={text => setCep(text)}
                placeholder='12345-678'
                onBlur={buscarEnderecoPorCep}
                style={Styles.input}/>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>Endereço:*</Text>
                <TextInput value={endereco} style={Styles.input} placeholder='Endereço...'></TextInput>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>Complemento:</Text>
                <TextInput style={Styles.input} placeholder='Complemento...'></TextInput>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>Bairro:*</Text>
                <TextInput style={Styles.input} value={bairro} placeholder='Bairro...'></TextInput>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>Cidade:*</Text>
                <TextInput style={Styles.input} value={cidade} placeholder='Cidade...'></TextInput>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>Ponto de Referência:</Text>
                <TextInput style={Styles.input} placeholder='Referência...'></TextInput>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>UF:*</Text>
                <TextInput style={Styles.input} value={uf} placeholder='UF...'></TextInput>
              </View>

              <View style={Styles.campo}>
                <Text style={Styles.label}>País:*</Text>
                <TextInput style={Styles.input} value={pais} placeholder='País...'></TextInput>
              </View>
              </>
          ) : (
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
          )}

{selectedOption === 'opcao1' && (
              <View style={Styles.campo}>
                <Text style={Styles.label}>Campo para Opção 1:</Text>
                <TextInput
                  style={[Styles.input, !inputsHabilitados && Styles.inputDesabilitado]}
                  editable={inputsHabilitados}
                />
              </View>
            )}

            {selectedOption === 'opcao2' && (
              <View style={Styles.campo}>
                <Text style={Styles.label}>Campo para Opção 2:</Text>
                <TextInput
                  style={[Styles.input, !inputsHabilitados && Styles.inputDesabilitado]}
                  editable={inputsHabilitados}
                />
              </View>
            )}

              {!modoEdicao ? (
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>              
                <View style={{marginTop: 15, justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                  <TouchableOpacity onPress={irParaPagamento} style={Styles.botao3}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Pagamento</Text>
                  </TouchableOpacity>
                </View>
                </View>
              ) : (
                <>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>              
                 <View style={{marginTop: 20}}>
                   <TouchableOpacity onPress={Voltar} style={Styles.botao2}>
                     <Text style={{ color: 'white', fontSize: 18 }}>Voltar</Text>
                   </TouchableOpacity>
                 </View>
                 <View style={{marginTop: 20}}>
                   <TouchableOpacity onPress={finalizar} style={Styles.botao2}>
                     <Text style={{ color: 'white', fontSize: 18 }}>Finalizar</Text>
                   </TouchableOpacity>
                 </View>
                 </View>
               </>
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
    borderColor: '#FF005C'
  },
  inputmetade:{
    width: 150,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF005C'
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