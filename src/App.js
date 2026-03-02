import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo01 from './jsx_examples/exemplo-01-estrutura';
import Exemplo02 from './jsx_examples/exemplo-02-expressoes';
import Exemplo03 from './jsx_examples/exemplo-03-condicionais';
import Exemplo04 from './jsx_examples/exemplo-04-listas';
import Exercicio1 from './lista01/exercicio1-View_com_Text';
import Exercicio2 from './lista01/exercicio2-Variaveis_JSX';
import Exercicio3 from './lista01/exercicio3-Funcao_JSX';
import Exercicio01 from './lista02/exercicio1-Operador_Ternario';
import Exercicio02 from './lista02/exercicio2-Operador_&&';
import Exercicio03 from './lista02/exercicio3-Condicional_Multiplas_Condicoes';
import Exercicio001 from './lista03/exercicio1-Lista_Frutas';


export default function App() {
  return (
    <View style={styles.container}>
      <Exercicio001 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
