import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, SafeAreaView } from "react-native";

import api from './src/services/api';

export default function App() {

  const [CEP, setCEP] = useState('');

  function buscaCEP(){

  }

  return (
    <SafeAreaView style={styles.container}>
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
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Buscar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inferior}>
        <Text style={styles.textoSaida}>CEP: </Text>
        <Text style={styles.textoSaida}>Logradouro: </Text>
        <Text style={styles.textoSaida}>Complemento: </Text>
        <Text style={styles.textoSaida}>Bairro: </Text>
        <Text style={styles.textoSaida}>Localidade: </Text>
        <Text style={styles.textoSaida}>UF: </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  superior: {

  },
  inferior: {

  },
  campoEntrada: {

  },
  texto: {

  },
  input: {

  },
  botoes: {

  },
  botao: {

  },
  textoBotao: {

  },
  textoSaida: {
    
  }
})