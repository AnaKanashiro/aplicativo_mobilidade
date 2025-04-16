import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import RotaHistoricoCard from "../componentes/RotaHistoricoCard.js";
import HistoricoRotasDados from "../mocks/historicoRotasDados.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyles } from "../styles/globalStyles.js";

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
    const jaFavorita = rotasFavoritas.some(
      (favorita) => favorita.id === rota.id
    );
    let novasFavoritas = [...rotasFavoritas];

    if (jaFavorita) {
      novasFavoritas = novasFavoritas.filter((f) => f.id !== rota.id);
    } else {
      novasFavoritas.push(rota);
    }

    setRotasFavoritas(novasFavoritas);

    // Salva as rotas favoritas no AsyncStorage
    try {
      await AsyncStorage.setItem(
        "rotasFavoritas",
        JSON.stringify(novasFavoritas)
      );
    } catch (error) {
      console.error("Erro ao salvar favoritos:", error);
    }
  };

  const renderItem = ({ item }) => {
    const isFavorite = rotasFavoritas.some((f) => f.id === item.id);
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
      <Text style={globalStyles.titulo}>Últimas Rotas</Text>
      <FlatList
        data={historicoRotas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        extraData={rotasFavoritas}
      />
      <TouchableOpacity
        style={globalStyles.botaoContainer}
        onPress={() => navigation.navigate("Home")}
      >
        <Feather name="home" size={24} color='rgb(255, 255, 201)'  />
        <Text style={globalStyles.text}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgb(21, 52, 98)",
  },
});
