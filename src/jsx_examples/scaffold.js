// ============================================
// Arquivo Base
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function Scaffold() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}></Text>
      <Text style={styles.subtitulo}></Text>
      {/* VAMOS CONSTRUIR AQUI E USAR styles.exemplo */}
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
});
// scaffold.js
// Exibindo scaffold.js…
// Scaffold base para aulas
// DANIEL MANOEL FILHO
// •
// 07:14
// Arquivo em anexo contendo o esqueleto para aulas de introdução.
// scaffold.js
// JavaScript

// Comentários da turma

// Adicionar comentário para a turma...