import { StyleSheet, Text, View } from "react-native";

export default function ExercicioTresCaixas1() {
  return <View style={styles.container}>
    <Text style={styles.titulo}>Coluna de Três Caixas</Text>
    
    <View style={{flexDirection: "column", gap: 8, justifyContent: "center"}}/>
    <View style={styles.redBox} />
    <View style={styles.greenBox} />
    <View style={styles.blueBox} />
</View>
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    height: 80,
    width: 80,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});