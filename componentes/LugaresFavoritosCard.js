import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function LugaresFavoritosCard({ nome, endereco }) {
  return (
    <View style={globalStyles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.endereco}>{endereco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color: "rgb(79, 160, 149)",
  },
  endereco: {
    fontSize: 14,
    color: "#555",
  },
});
