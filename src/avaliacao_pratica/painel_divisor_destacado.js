import { StyleSheet, Text, View } from "react-native";

export default function PainelDivisor2() {
  return <View style={styles.container}>
       <View style={styles.header}><Text style={styles.textStyle}>header</Text></View>
       
        <View style={styles.sideBar}><Text style={styles.textStyle}>sidebar</Text></View>

        <View style={styles.containerCard}>

        <View style={styles.areaPrincipal}><Text style={styles.textStyle}>areaPrincipal</Text></View>

        <View style={styles.secaoSuperior}><Text style={styles.textStyle}>secaoSuperior</Text></View>

        <View style={styles.divisorCircular}><Text style={styles.textStyle}>divisorCircular</Text></View>

        <View style={styles.secaoInferior}><Text style={styles.textStyle}>secaoInferior</Text></View>

        <View style={styles.footer}><Text style={styles.textStyle}>footer</Text></View>
        </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    gap: 8,
    backgroundColor: "#1a1a1a",
    borderRadius: 8
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  header: {
    height: 60,
    backgroundColor: "#2c3e50",
  },
  sideBar: {
    width: 80,
    backgroundColor: "#95a5a6",
    borderRadius: 8
  },

  areaPrincipal: {
   flex: 1,
   flexDirection: "column",
   justifyContent: "center",
   borderRadius: 8,
   flexDirection: "column",
   alignItems: "center",
   backgroundColor: "green"
  },

  secaoSuperior: {
    flex: 1,
    backgroundColor: "green",
    backgroundColor: "blue",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },

  divisorCircular: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#34495e",
    flexDirection: "row"
  },
  
  secaoInferior: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  footer: {
    height: 50,
    backgroundColor: "#2c3e50"
  }
});