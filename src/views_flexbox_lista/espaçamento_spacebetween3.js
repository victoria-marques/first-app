import { StyleSheet, Text, View } from "react-native";

export default function ExercicioSpaceBetween3() {
  return <View style={styles.container}>
    <Text style={styles.titulo}>Espaçamento com Space Between</Text>
    
    <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
    <View style={styles.redBox} />
    <View style={styles.greenBox} />
    <View style={styles.blueBox} />
</View>
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
    height: 70,
    width: 70,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 70,
    width: 70,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 70,
    width: 70,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});