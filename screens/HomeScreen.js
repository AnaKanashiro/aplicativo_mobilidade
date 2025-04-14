import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from '../componentes/Header';
import OpcoesHome from '../componentes/OpcoesHome';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <OpcoesHome />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});