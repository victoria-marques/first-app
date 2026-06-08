// TODO: estilizar esta tela com as cores e identidade visual do seu tema
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useState,
  useEffect,
} from 'react-native';

// TODO: substituir pelos jogos que voce escolheu
const jogos = [
  {
    id: '1',
    titulo: 'Resident Evil Requiem',
    genero: 'Terror',
    plataforma: 'Xbox Series X/S',
    nota: '10/10',
    sinopse:
      'Hospital Centro de Cuidados que foi infectada pelo Vírus T e uma Cepa mutante sendo transferido pelos médicos, pacientes e funcionários sua missão é sair de lá o mais rápido possível.',
  },
  {
    id: '2',
    titulo: 'Red Dead Redemption 2',
    genero: 'Acao / Mundo Aberto',
    plataforma: 'PS4 / Xbox / PC',
    nota: '10/10',
    sinopse:
      'Uma epica historia sobre a vida fora da lei no coracao da America. Viva a aventura de Arthur Morgan no velho oeste em um mundo detalhado e imersivo.',
  },
  {
    id: '3',
    titulo: 'Hollow Knight Silksong',
    genero: 'Plataforma',
    plataforma: 'Xbox Series X/S',
    nota: '10/10',
    sinopse:
      'A protagonista Hornet (princesa e protetora de Hallownest) é capturada por forças misteriosas e levada para Pharloom, um reino governado por sinos, seda e magia de canções. Com habilidades perdidas e sem conhecer o novo território, ela deve lutar para descobrir a verdade sobre sua captura',
  },
  {
    id: '4',
    titulo: 'Hollow Knight',
    genero: 'Metroidvania / Plataforma',
    plataforma: 'PC / Switch / PS4',
    nota: '10/10',
    sinopse:
      'Explore um vasto reino subterraneo habitado por insetos. Um desafio preciso e belo, com um mundo imenso para descobrir.',
  },
  {
    id: '5',
    titulo: 'Lego Batman o Legado do Cavaleiro das Trevas',
    genero: 'Aventura, Comédia e Ação',
    plataforma: 'PC / Switch / PS4 / Xbox Series X/S',
    nota: '10/10',
    sinopse:
      'O jogo une o bom humor clássico dos bloquinhos com o sistema de combate fluido da série Arkham e uma pegada de mundo aberto. A narrativa funciona como um "mosaico", acompanhando a evolução de Bruce Wayne desde o Beco do Crime até a consolidação da Bat-Família',
  },
  {
    id: '6',
    titulo: 'Lego Piratas do Caribe',
    genero: 'Ação e Aventura',
    plataforma: 'PC / Switch / Xbox Series X/S',
    nota: '10/10',
    sinopse:
      'Adapta os enredos dos quatro primeiros filmes da franquia: A Maldição do Pérola Negra, O Baú da Morte, No Fim do Mundo e Navegando em Águas Misteriosas. O jogo segue o Capitão Jack Sparrow, Will Turner e Elizabeth Swann em uma jornada repleta de tesouros, maldições, criaturas místicas e batalhas navais, tudo recontado com o humor pastelão clássico da franquia LEGO',
  },
];

export default function HomeScreen({ navigation }) {
  const [busca, setBusca] = useState('')
  const [jogosFiltrados, setJogosFiltrados] = useState(jogos)
  useEffect(() =>{
    const resultado = jogos.filter((jogo) =>
      jogo.titulo.toLowerCase().includes(busca,toLowerCase(),
      setJogosFiltrados(resultado)
    )
  )
}, [busca])

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Detalhe', {...item})}>
        <View style={styles.cardIcone}>
          {/* TODO: substituir pela inicial do titulo ou outro elemento do seu tema */}
          <Text style={styles.cardIconeTexto}>{item.titulo[0]}</Text>
        </View>
        <View style={styles.cardInfo}>
          {/* TODO: substituir pelos campos do seu tema */}
          <Text style={styles.cardTitulo}>{item.titulo}</Text>
          <Text style={styles.cardSubtitulo}>{item.genero}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        { DragonGames }
        <Text style={styles.headerTitulo}>Catalogo de Games</Text>
        <Text style={styles.headerSubtitulo}>
          Escolha um jogo para ver os detalhes
        </Text>
      </View>
      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#999"
          value={busca}
          onChangeText={setBusca}
        />
      </View>
      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
        data={jogos} data={jogosFiltrados}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buscaContainer: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#8B0000',
  },
  buscaInput: {
    backgroundColor: '#0A0A0A',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  header: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#8B0000',
  },
  headerSubtitulo: {
    fontSize: 13,
    color: '#0A0A0A',
    marginTop: 4,
  },
  lista: {
    padding: 16,
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    shadowColor: '#333333',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  cardIcone: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardIconeTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B0000',
  },
  cardInfo: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0A0A0A',
    marginBottom: 4,
  },
  cardSubtitulo: {
    fontSize: 13,
    color: '#333333',
  },
});
