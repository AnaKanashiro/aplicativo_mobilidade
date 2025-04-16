import React from "react";
import { View, Text, StyleSheet } from "react-native";

function LugaresFavoritosCard({ nome, endereco }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.endereco}>{endereco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgb(236, 241, 255)",
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color: "rgb(122, 27, 255)",
  },
  endereco: {
    fontSize: 14,
    color: "#555",
  },
});

export default LugaresFavoritosCard;