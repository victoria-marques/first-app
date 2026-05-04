import { StyleSheet, View } from 'react-native';
// import ExercicioCaixasLinha2 from './views_flexbox_lista/tres_caixas_linha2';
// import ExercicioDuasColunas5 from './views_flexbox_lista/layout_duas_colunas5';
// import ExercicioSpaceBetween3 from './views_flexbox_lista/espaçamento_spacebetween3';
// import ExercicioCaixaCentraliza4 from './views_flexbox_lista/caixa_centralizada4';
// import ExercicioHeaderFooter6 from './views_flexbox_lista/header_conteudo_footer6';
// import GradesAssimetricas1 from './avaliacao_pratica/layout_grades_assimétricas';
// import PainelDivisor2 from './avaliacao_pratica/painel_divisor_destacado';
// import CartaoPerfil from './basic_components/props/exemplo1';
// import CardProduto from './basic_components/props/exercício01';
// import Saudacao from './basic_components/props/exercício03';
// import PerfilAluno from './basic_components/props/exercício04';
// import ContadorExample from './hooks/useState_example';
// import TelaDeLogin from './hooks/useRef_example';
// import TelaMoeda from './hooks/useEffect_example';
// import Recados from './hooks/exercicio1';
import FormularioExemplos from './text_input/formulario';
import FlatListExemplo from './flat_list/flatlist';





export default function App() {
  return (
    <View style={styles.container}>
      <FlatListExemplo />
    </View>

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