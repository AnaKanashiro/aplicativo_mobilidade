import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen.js";
import FavoritosScreen from "../screens/FavoritosScreen.js";
import RotasScreen from "../screens/RotasScreen.js";
import HistoricoScreen from "../screens/HistoricoScreen.js";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Remove apenas para a Home
        />
        <Stack.Screen name="Favoritos" component={FavoritosScreen} />
        <Stack.Screen name="Rotas" component={RotasScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
