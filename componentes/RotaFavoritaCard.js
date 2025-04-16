import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";

function RotaFavoritaCard({ nome, partida, destino, descricao }) {
  return (
    <View style={globalStyles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.partida}>Partida: {partida}</Text>
      <Text style={styles.destino}>Destino: {destino}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
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