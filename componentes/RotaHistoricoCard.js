import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';

function RotaHistoricoCard({ nome, partida, destino, descricao, onSave, isFavorite }) {
  return (
    <View style={globalStyles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.partida}>Partida: {partida}</Text>
      <Text style={styles.destino}>Destino: {destino}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
      
      <TouchableOpacity 
        onPress={onSave} 
        style={styles.favoriteButton}
      >
        <Feather name="heart" size={24} color={isFavorite ? 'red' : 'gray'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: 'rgb(79, 160, 149)',
  },
  partida: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
  },
  destino: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
  },
  descricao: {
    fontSize: 14,
    color: '#555',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default RotaHistoricoCard;
