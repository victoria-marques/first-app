import { StyleSheet, Text, View } from "react-native";

export default function GradesAssimetricas1() {
  return <View style={styles.container}>
             <View style={styles.amarelo}><Text style={styles.textStyle}>amarelo</Text></View>

             <View style={styles.azul}><Text style={styles.textStyle}>azul escuro</Text></View>

             <View style={styles.verde}><Text style={styles.textStyle}>verde</Text></View>

             <View style={styles.rosa}><Text style={styles.textStyle}>rosa</Text></View>
             
             <View style={styles.laranja}><Text style={styles.textStyle}>laranja</Text></View>

             <View style={styles.vermelho}><Text style={styles.textStyle}>vermelho</Text></View>

             <View style={styles.roxo}><Text style={styles.textStyle}>roxo</Text></View>
       
    </View >
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
    padding: 8
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  amarelo: {
    gap: 8, 
    backgroundColor: "yelow",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: 100,
    borderRadius: 8
  },
  azul: {
    gap: 8,
    backgroundColor: "blue",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: 100,
    borderRadius: 8,
  },
  verde: {
    backgroundColor: "green",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 3,
    flexDirection: "row",
    borderRadius: 8
  },
  rosa: {
    flexDirection: "row",
    backgroundColor: "pink",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
    flexDirection: "column",
    borderRadius: 8
  },
  laranja: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "orange",
    borderRadius: 8,
    flexDirection: "column"
  },
  vermelho: {
    gap: 8,
    backgroundColor: "red",
    height: 90,
    width: 120,
    borderRadius: 8
  },
  roxo: {
    gap: 8,
    backgroundColor: "purple",
    height: 90,
    width: 120,
    borderRadius: 8 
  }
  
});