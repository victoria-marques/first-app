// Dado as variáveis abaixo já declaradas no componente:
// const linguagem = "JavaScript";
// const ano = 2025;
// Exiba na tela os textos "Linguagem: JavaScript" e "Ano: 2025", utilizando os valores das variáveis
// de forma dinâmica.

import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Exercicio2() {
    const Linguagem = "JavaScript"
    const Ano = 2025

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 01 - Victória Marques</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 2 - variáveis JSX</Text>

        <View style={styles.exercicio2}>
        <Text style={styles.string}>Linguagem: {Linguagem.toUpperCase()}</Text>
        <Text style={styles.string}>Ano: {Ano} </Text>
        </View>
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