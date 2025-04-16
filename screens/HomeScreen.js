import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import OpcoesHome from '../componentes/OpcoesHome';
import { globalStyles } from '../styles/globalStyles';

export default function App() {
  return (
    <View style={globalStyles.screenContainer}>
      <OpcoesHome />
      <StatusBar style="auto" />
    </View>
  );
}
