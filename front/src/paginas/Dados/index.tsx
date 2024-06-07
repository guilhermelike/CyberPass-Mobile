import { View, Text, StatusBar, StyleSheet, TextInput, Image, ScrollView, ImageBackground, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import { TextInputMask } from 'react-native-masked-text'

const Dados = ({navigation}) => {
  const [cpf, setCpf] = useState('');
  const [data, setData] = useState('');
  const [numero, setNumero] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [pais, setPais] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [modoEdicao, setModoEdicao] = useState(false);
  const [changePasswordMode, setChangePasswordMode] = useState(false);

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

  const alterarInputs = () => {
    if (inputsHabilitados == false){
    setInputsHabilitados(true);
      setModoEdicao(true);
}
    else {
      setInputsHabilitados(false);
      setModoEdicao(false);
    }
  };

  const mudarSenha = () => {
    setChangePasswordMode(true);
    setModoEdicao(false);
    setInputsHabilitados(true);
  };

  const salvarDados = () => {
    setInputsHabilitados(false);
    setModoEdicao(false);
    setChangePasswordMode(false);
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={require('../../../assets/background.png')} resizeMode='cover' style={{display: 'flex', alignItems: 'center', width: '100%'}}>
        <ScrollView style={{height: '100%'}} showsVerticalScrollIndicator={false}>

            <View style={{marginTop: 25, display: 'flex', gap: 10, backgroundColor: 'white', borderRadius: 15, padding: 10, marginBottom: 70}}>
            {!changePasswordMode && (
              <>
              <View style={styles.campo2}>
                <View >
                  <Text style={styles.label}>Nome:</Text>
                  <TextInput editable={inputsHabilitados} style={[styles.inputmetade, !inputsHabilitados && styles.inputDesabilitado]} placeholder='Marcelo'></TextInput>
                </View>

                <View>
                  <Text style={styles.label}>Sobrenome:</Text>
                  <TextInput editable={inputsHabilitados} style={[styles.inputmetade, !inputsHabilitados && styles.inputDesabilitado]} placeholder='Batista'></TextInput>
                </View>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>Email:</Text>
                <TextInput editable={inputsHabilitados} textContentType='emailAddress' style={[styles.input, !inputsHabilitados && styles.inputDesabilitado]} placeholder='triplogamer@gmail.com'></TextInput>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>CPF:</Text>
                <TextInputMask 
                style={[styles.input, styles.inputDesabilitado]}
                type={'cpf'}
                value={cpf}
                onChangeText={text => setCpf(text)} 
                placeholder='111.111.111-11'
                editable={false}/>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>Data de Nascimento:</Text>
                <TextInputMask 
                style={[styles.input, !inputsHabilitados && styles.inputDesabilitado]}
                type={'datetime'}
                value={data}
                onChangeText={text => setData(text)}
                maxLength={10}
                placeholder='11/11/2011'
                editable={inputsHabilitados}/>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>Telefone:</Text>
                <TextInputMask 
                style={[styles.input, !inputsHabilitados && styles.inputDesabilitado]}
                type={'cel-phone'}
                value={numero}
                onChangeText={text => setNumero(text)}
                maxLength={14}
                placeholder='(41)99999-9999'
                editable={inputsHabilitados}/>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>CEP:</Text>
                <TextInputMask 
                style={[styles.input, !inputsHabilitados && styles.inputDesabilitado]}
                type={'zip-code'}
                maxLength={9}
                value={cep}
                onChangeText={text => setCep(text)}
                placeholder='12345-678'
                onBlur={buscarEnderecoPorCep}
                editable={inputsHabilitados}/>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>Endereço:</Text>
                <TextInput value={endereco} editable={inputsHabilitados} style={[styles.input, !inputsHabilitados && styles.inputDesabilitado]} placeholder='Endereço...'></TextInput>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>Complemento:</Text>
                <TextInput editable={inputsHabilitados} style={[styles.input, !inputsHabilitados && styles.inputDesabilitado]} placeholder='Complemento...'></TextInput>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>Bairro:</Text>
                <TextInput editable={inputsHabilitados} value={bairro} style={[styles.input, !inputsHabilitados && styles.inputDesabilitado]} placeholder='Bairro...'></TextInput>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>Cidade:</Text>
                <TextInput editable={inputsHabilitados} value={cidade} style={[styles.input, !inputsHabilitados && styles.inputDesabilitado]} placeholder='Cidade...'></TextInput>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>Ponto de Referência:</Text>
                <TextInput editable={inputsHabilitados} style={[styles.input, !inputsHabilitados && styles.inputDesabilitado]} placeholder='Referência...'></TextInput>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>UF:</Text>
                <TextInput editable={inputsHabilitados} value={uf} style={[styles.input, !inputsHabilitados && styles.inputDesabilitado]} placeholder='UF...'></TextInput>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>País:</Text>
                <TextInput editable={inputsHabilitados} value={pais} style={[styles.input, !inputsHabilitados && styles.inputDesabilitado]} placeholder='País...'></TextInput>
              </View>

              </>
            )}

            {changePasswordMode && (
              <>

              <View style={styles.campo}>
                <Text style={styles.label}>Senha Atual:</Text>
                <TextInput editable={inputsHabilitados} secureTextEntry={true} textContentType='password' style={[styles.input, !inputsHabilitados && styles.inputDesabilitado]} placeholder='Insira a sua senha...'></TextInput>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>Nova Senha:</Text>
                <TextInput editable={inputsHabilitados} secureTextEntry={true} textContentType='password' style={[styles.input, !inputsHabilitados && styles.inputDesabilitado]} placeholder='Insira a nova senha...'></TextInput>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>Confirmação da Nova Senha:</Text>
                <TextInput editable={inputsHabilitados} secureTextEntry={true} textContentType='password' style={[styles.input, !inputsHabilitados && styles.inputDesabilitado]} placeholder='Confirme a nova senha...'></TextInput>
              </View>

              </>
            )}

              {!modoEdicao && !changePasswordMode ? (
                <>
                 <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>              
                  <View style={styles.botao}>
                    <TouchableOpacity onPress={alterarInputs} style={styles.botao2}>
                      <Text style={{ color: 'white', fontSize: 18 }}>Alterar</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.botao}>
                    <TouchableOpacity onPress={mudarSenha} style={styles.botao2}>
                      <Text style={{ color: 'white', fontSize: 18 }}>Mudar a Senha</Text>
                    </TouchableOpacity>
                  </View>
                  </View>
                </>
              ) : (
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>              
                <View style={{marginTop: 10, justifyContent: 'center', display: 'flex', alignItems: 'center', marginBottom: 10}}>
                  <TouchableOpacity onPress={salvarDados} style={styles.botao3}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Salvar dados</Text>
                  </TouchableOpacity>
                </View>
                </View>
              )}

              </View>
              </ScrollView>
            </ImageBackground>
          </View>
    </>
  )
}

const styles = StyleSheet.create({
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
  botao:{
    marginTop: 10,
    marginBottom: 10
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
    width: 200,
    display: 'flex',
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    borderRadius: 15
  },
  cardimagem:{
    display: 'flex',
    alignItems:'center',
    width: 250,
    height: 250
  },
  recuperar:{
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 2
  },
  imagem:{
    width: '100%',
    height: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF005C'
  },
  container:{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
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
  rosa:{
    color: '#FF005C',
    fontSize: 25,
    fontWeight: '400'
  },
  rosa2:{
    color: '#FF005C',
    fontSize: 15,
    fontWeight: '300',
  },
  rosa3:{
    color: '#FF005C',
    fontSize: 18,
    fontWeight: '300',
  },
  branco:{
      color: 'black',
      fontSize: 25,
      fontWeight: '300'
  },
  branco2:{
    color: 'black',
    fontSize: 25,
    fontWeight: '400'
},
branco3:{
  color: 'black',
  fontSize: 15,
  fontWeight: '300',
},
branco4:{
  color: 'black',
  fontSize: 18,
  fontWeight: '300',
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
  }
})

export default Dados;