import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, SafeAreaView, StatusBar, Keyboard } from "react-native";

import api from './src/services/api';

export default function App() {

  const [CEP, setCEP] = useState('');
  const [informacoes, setInformacoes] = useState('');
  const inputRef = useRef(null);

    async function buscarCEP() {
      if (CEP === '') {
        Alert.alert('Atenção!', 'Por favor, informe um CEP');
        inputRef.current.focus();
        return;
      }

      try {
        const response = await api.get(`/${CEP}/json/`);
        setInformacoes(response.data);
        Keyboard.dismiss();
      } catch {
        Alert.alert('Atenção!', 'Erro ao buscar este CEP');
        limparCEP();
      }
    }

  function limparCEP() {
    setCEP('');
    setInformacoes('');
    inputRef.current.focus();
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.superior}>
        <View style={styles.campoEntrada}>
          <Text style={styles.texto}>Informe o CEP abaixo</Text>
          <TextInput
            placeholder="Ex: 01001000"
            value={CEP}
            keyboardType="numeric"
            onChangeText={(texto) => setCEP(texto)}
            style={styles.input}
            ref={inputRef}
          />
        </View>
        <View style={styles.botoes}>
          <TouchableOpacity
            style={[styles.botao, style = { backgroundColor: '#3333ff', marginRight: 20 }]}
            onPress={buscarCEP}
          >
            <Text style={styles.textoBotao}>Buscar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botao, style = { backgroundColor: '#ff3333', marginLeft: 20 }]}
            onPress={limparCEP}
          >
            <Text style={styles.textoBotao}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
      {CEP &&
        <View style={styles.inferior}>
          <Text style={styles.textoSaida}>CEP: {informacoes.cep}</Text>
          <Text style={styles.textoSaida}>Logradouro: {informacoes.logradouro}</Text>
          <Text style={styles.textoSaida}>Complemento: {informacoes.complemento}</Text>
          <Text style={styles.textoSaida}>Bairro: {informacoes.bairro}</Text>
          <Text style={styles.textoSaida}>Localidade: {informacoes.localidade}</Text>
          <Text style={styles.textoSaida}>UF: {informacoes.uf}</Text>
        </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  superior: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inferior: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  campoEntrada: {
    flexDirection: 'column',
  },
  texto: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  input: {
    width: 240,
    marginTop: 10,
    padding: 5,
    paddingLeft: 10,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
  },
  botoes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  botao: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  textoSaida: {
    fontSize: 25,
    color: '#000000',
  }
})