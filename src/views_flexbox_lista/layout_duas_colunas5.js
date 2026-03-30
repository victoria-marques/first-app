import { StyleSheet, Text, View } from "react-native";

export default function ExercicioDuasColunas5() {
  return <View style={styles.container}>
      <View style={styles.greenBox} >
        <Text style={styles.textStyle}>Coluna 1</Text>
      </View>
      <View style={styles.blueBox} >
        <Text style={styles.textStyle}>Coluna 2</Text>
      </View >
    </View >
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    gap: 8
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
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  blueBox: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
});