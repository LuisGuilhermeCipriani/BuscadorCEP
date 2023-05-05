import React, {useState, useEffect, useRef} from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from "react-native";

export default function App(){

  return(
    <View style={styles.container}>
      <Text>Inicio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})