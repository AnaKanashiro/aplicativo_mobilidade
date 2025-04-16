import React from "react";
import { View, Text, StyleSheet } from "react-native";

function RotaFavoritaCard({ nome, partida, destino, descricao }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.partida}>Partida: {partida}</Text>
      <Text style={styles.destino}>Destino: {destino}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
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
  partida: {
    fontSize: 14,
    marginBottom: 4,
    color: "#555",
  },
  destino: {
    fontSize: 14,
    marginBottom: 4,
    color: "#555",
  },
  descricao: {
    fontSize: 14,
    color: "#555",
  },
});

export default RotaFavoritaCard;