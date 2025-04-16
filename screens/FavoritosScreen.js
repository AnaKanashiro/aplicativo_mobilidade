import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import LugaresFavoritosCard from "../componentes/LugaresFavoritosCard.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FavoritosScreen() {
  const navigation = useNavigation();
  const [lugaresFavoritos, setLugaresFavoritos] = useState([]);

  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        const dados = await AsyncStorage.getItem('rotasFavoritas');
        if (dados) {
          setLugaresFavoritos(JSON.parse(dados));
        } else {
          setLugaresFavoritos([]);
        }
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
      }
    };

    const unsubscribe = navigation.addListener('focus', carregarFavoritos);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Rotas Favoritas</Text>

      <FlatList
        data={lugaresFavoritos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LugaresFavoritosCard
            nome={item.nome}
            endereco={`De: ${item.partida} Para: ${item.destino}`}
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
    padding: 16,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#0a4973",
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
