import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";

import api from './src/services/api';

export default function App() {

  const [CEP, setCEP] = useState('');

  function buscaCEP() {

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
            onChangeText={buscaCEP}
            style={styles.input}
          />
        </View>
        <View style={styles.botoes}>
          <TouchableOpacity style={[styles.botao, style = { backgroundColor: '#3333ff', marginRight: 20 }]}>
            <Text style={styles.textoBotao}>Buscar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao, style = { backgroundColor: '#ff3333', marginLeft: 20 }]}>
            <Text style={styles.textoBotao}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
      {CEP &&
        <View style={styles.inferior}>
          <Text style={styles.textoSaida}>CEP: </Text>
          <Text style={styles.textoSaida}>Logradouro: </Text>
          <Text style={styles.textoSaida}>Complemento: </Text>
          <Text style={styles.textoSaida}>Bairro: </Text>
          <Text style={styles.textoSaida}>Localidade: </Text>
          <Text style={styles.textoSaida}>UF: </Text>
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