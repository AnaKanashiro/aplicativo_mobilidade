import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import LugaresFavoritosCard from "../componentes/LugaresFavoritosCard";
import LugaresFavoritosDados from "../mocks/lugaresFavoritosDados";
import { globalStyles } from "../styles/globalStyles";

export default function FavoritosScreen() {
  const navigation = useNavigation();
  const [lugaresFavoritos, setLugaresFavoritos] = useState([]);

  useEffect(() => {
    const carregarFavoritos = () => {
      setLugaresFavoritos(LugaresFavoritosDados());
    };

    const unsubscribe = navigation.addListener("focus", carregarFavoritos);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.titulo}>Minhas Rotas Favoritas</Text>

      <FlatList
        data={lugaresFavoritos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LugaresFavoritosCard
            nome={item.legenda}
            endereco={item.endereco}
          />
        )}
      />

      <TouchableOpacity
        style={globalStyles.botaoContainer}
        onPress={() => navigation.navigate("Home")}
      >
        <Feather name="home" size={24} color='rgb(255, 255, 201)'/>
        <Text style={globalStyles.text}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}
