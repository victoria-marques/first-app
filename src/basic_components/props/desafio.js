import {View, Text, TouchableOpacity, StyleSheet} from "react-native"

export default function Botao(props) {
    return(
       <SafeAreaProvider>
        <SafeAreaView style={StyleSheet.container}>
            <View style={styles.countContainer}>
            <Text>Count: {count}</Text>
            </View> /*contar o número de itens*/
            <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>Cadastrar</Text>
            <Text>Entrar</Text>
            <Text>Sair</Text> 
            </TouchableOpacity>/*"onPress"detectar quando o usuário toca ou clica em um elemento*/
        </SafeAreaView>
       </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
