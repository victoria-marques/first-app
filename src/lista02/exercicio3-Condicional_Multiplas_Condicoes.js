// Dado a variável abaixo:
// const nota = 7.5;
// Exiba na tela uma mensagem de acordo com o valor da nota:
// • Se a nota for maior ou igual a 7, exiba "Aprovado" (com cor verde).
// • Se a nota for maior ou igual a 5 e menor que 7, exiba "Recuperação" (com cor amarela/laranja).
// • Se a nota for menor que 5, exiba "Reprovado" (com cor vermelha).
// Teste alterando o valor da variável nota para verificar se as três situações funcionam corretamente.

import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Exercicio03() {
    const nota = 7.5
    
    const alunos = [
        {id: 1, nome: "Maggie", nota: 9},
        {id:2, nome: "Coragem", nota: 5},
    ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 02 - Victória Marques</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 3 - Condicional Multiplas Condicoes</Text>
        {alunos.map((aluno) => (
            <Text key={aluno.id}>
                {aluno.nome} - {aluno.nota}
            </Text>
        ))}        
      </View>

      <View>
        {alunos 
        .filter((aluno) => aluno.nota >= 7)
        .map((aluno) => (
           <Text key={aluno.id}>
                Aprovado: {aluno.nome} - Nota: {aluno.nota}
            </Text>
        ))}
      </View>

      <View>
        {alunos
        .filter((aluno) => aluno.nota >= 5 && aluno.nota <= 7)
        .map((aluno) => (
            <Text key={aluno.id}>
                Recuperação: {aluno.nome} - Nota: {aluno.nota}
            </Text>
        ))}
      </View>

      <View>
        {alunos
        .filter((aluno) => aluno.nota < 5)
        .map((aluno) => (
            <Text key={aluno.id}>
                Reprovado: {aluno.nome} - Nota: {aluno.nota}
            </Text>
        ))
        
        
        
        
        }
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