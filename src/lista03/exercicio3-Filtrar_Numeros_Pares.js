// Dado o array abaixo:
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Exiba na tela apenas os números pares. Primeiro filtre o array e depois renderize os itens
// resultantes.

import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Exercicio003() {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 01 - SeuNome</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 3 - Lista de numeros</Text>
        {numeros.filter((numero) => numero % 2 == 0).map((numero) => {
          <Text key={numero}>
            {numero}
          </Text>
        })}
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