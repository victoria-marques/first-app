import { StyleSheet, View } from 'react-native';
import ExercicioCaixasLinha2 from './views_flexbox_lista/tres_caixas_linha2';
import ExercicioDuasColunas5 from './views_flexbox_lista/layout_duas_colunas5';
import ExercicioSpaceBetween3 from './views_flexbox_lista/espaçamento_spacebetween3';
import ExercicioCaixaCentraliza4 from './views_flexbox_lista/caixa_centralizada4';
import ExercicioHeaderFooter6 from './views_flexbox_lista/header_conteudo_footer6';
import GradesAssimetricas1 from './avaliacao_pratica/layout_grades_assimétricas';
import PainelDivisor2 from './avaliacao_pratica/painel_divisor_destacado';





export default function App() {
  return (
    <View style={styles.container}>
      <PainelDivisor2/>
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
