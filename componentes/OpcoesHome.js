import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OpcoesHome = () => {
  const navigation = useNavigation();

  const buttons = [
    { name: 'heart', text: 'Lugares Favoritos', page: 'Favoritos' },
    { name: 'map', text: 'Rotas Favoritas', page: 'Rotas' },
    { name: 'history', text: 'Histórico', page: 'Historico' }
  ];

  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <View key={index} style={styles.buttonContainer}>
          <FontAwesome.Button
            name={button.name}
            backgroundColor='rgb(160, 0, 247)'
            color="white"
            size={24}
            borderRadius={10}
            onPress={() => navigation.navigate(button.page)}
            style={styles.button}
          >
            {button.text}
          </FontAwesome.Button>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    buttonContainer: {
      marginVertical: 15, // Aumentei o espaçamento
    },
    button: {
      width: '100%',
      justifyContent: 'center',
      paddingVertical: 15, // Aumentei o padding
    }
  });

export default OpcoesHome;