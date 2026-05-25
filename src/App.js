import { StyleSheet, View, Text, FlatList } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"

import StackNavigator from './navigation/exemplos/stack_navigator';
import HomeScreen from './navigation/screens/HomeScreen';
import BottomTabNavigator from './navigation/exemplos/bottom_tab_navigator';
import DrawerNavigator from './navigation/exemplos/drawer_navigation';

export default function App() {
  return (
  <NavigationContainer>
    <DrawerNavigator/>
  </NavigationContainer>

  );
}


const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor: "#f5f5f5",
},
titulo: {
fontSize: 20,
fontWeight: "bold",
marginBottom: 20,
},
subtitulo: {
fontSize: 14,
fontWeight: "bold",
color: "#4285f4",
marginBottom: 8,
},
exemplo: {
width: "80%",
padding: 16,
marginBottom: 16,
backgroundColor: "#fff",
borderRadius: 8,
},
input: {
borderWidth: 1,
borderColor: "#ddd",
borderRadius: 8,
padding: 12,
marginBottom: 8,
},
botao: {
backgroundColor: "#4285f4",
padding: 12,
borderRadius: 8,
alignItems: "center",
marginTop: 4,
},
textoBotao: {
color: "#fff",
fontWeight: "bold",
},
});