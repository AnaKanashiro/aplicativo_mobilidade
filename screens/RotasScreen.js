import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import RotaFavoritaCard from "../componentes/RotaFavoritaCard.js";
import RotasFavoritasDados from "../mocks/rotasFavoritasdados.js";

export default function RotasFavoritasScreen() {
  const navigation = useNavigation();
  const rotasFavoritas = RotasFavoritasDados();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Rotas Favoritas</Text>
      <FlatList
        data={rotasFavoritas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RotaFavoritaCard
            nome={item.nome}
            partida={item.partida}
            destino={item.destino}
            descricao={item.descricao}
          />
        )}
      />
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Feather name="home" size={24} color="white" />
        <Text style={styles.homeButtonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#0a4973",
    padding: 30,
  },
  homeButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
  },
  homeButtonText: {
    color: "white",
    marginLeft: 5,
  },
});
