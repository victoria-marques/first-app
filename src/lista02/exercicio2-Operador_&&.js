// Dado a variável abaixo:
// const tem_promocao = true;
// Quando tem_promocao for verdadeiro, renderize um texto com a mensagem "Promoção ativa!
// Aproveite os descontos.". Quando for falso, nada deve aparecer naquele espaço.

import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Exercicio02() {
    const tem_promocao = true
    const descontos = true

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 02 - Victória Marques</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 2 - Operador &&</Text>
        <Text>Promocoes:
        {tem_promocao&& <Text>Voce tem promoções ativa na loja!</Text>}
        {!descontos && <Text>Aproveite os seu descontos</Text>}    
            
            
        </Text> 
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", paddingTop: 60 },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#212121",
  },
  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 8,
  },
  texto: { fontSize: 14, color: "#424242", lineHeight: 22 },
});