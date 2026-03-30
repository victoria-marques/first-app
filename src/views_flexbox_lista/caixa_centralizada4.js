import { StyleSheet, Text, View } from "react-native";

export default function ExercicioCaixaCentraliza4() {
  return <View style={styles.container}>
     <Text style={styles.titulo}>Caixa Centralizada</Text>

    <View style={{flexDirection: "row", gap: 8, justifyContent: "center", alignItems: "center"}}/>
    <View style={styles.redBox} />
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
    height: 120,
    width: 120,

    backgroundColor: "orange",
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