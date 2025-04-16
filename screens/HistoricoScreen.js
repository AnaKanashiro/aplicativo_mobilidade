import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import RotaHistoricoCard from "../componentes/RotaHistoricoCard.js";
import HistoricoRotasDados from "../mocks/historicoRotasDados.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoricoScreen() {
  const navigation = useNavigation();
  const [historicoRotas, setHistoricoRotas] = useState(HistoricoRotasDados());
  const [rotasFavoritas, setRotasFavoritas] = useState([]);

  const carregarFavoritos = async () => {
    try {
      const dados = await AsyncStorage.getItem("rotasFavoritas");
      if (dados) {
        setRotasFavoritas(JSON.parse(dados));
      }
    } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
    }
  };

  const adicionarOuRemoverFavorito = async (rota) => {
    const jaFavorita = rotasFavoritas.some(favorita => favorita.id === rota.id);
    let novasFavoritas = [...rotasFavoritas];

    if (jaFavorita) {
      novasFavoritas = novasFavoritas.filter(f => f.id !== rota.id);
    } else {
      novasFavoritas.push(rota);
    }

    setRotasFavoritas(novasFavoritas);

    // Salva as rotas favoritas no AsyncStorage
    try {
      await AsyncStorage.setItem("rotasFavoritas", JSON.stringify(novasFavoritas));
    } catch (error) {
      console.error("Erro ao salvar favoritos:", error);
    }
  };

  const renderItem = ({ item }) => {
    const isFavorite = rotasFavoritas.some(f => f.id === item.id);
    return (
      <RotaHistoricoCard
        nome={item.nome}
        partida={item.partida}
        destino={item.destino}
        descricao={item.descricao}
        onSave={() => adicionarOuRemoverFavorito(item)}
        isFavorite={isFavorite}
      />
    );
  };

  React.useEffect(() => {
    carregarFavoritos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Últimas Rotas</Text>
      <FlatList
        data={historicoRotas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        extraData={rotasFavoritas}
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
