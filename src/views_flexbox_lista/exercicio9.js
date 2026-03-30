import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView09() {
  return <View style={styles.container}>
    <View style={styles.containerCard}>
        <View style={styles.red}></View>
        <View style={styles.yellow}></View>
        <View style={styles.green}></View>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "100%"
  },

  containerCard: {
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 8,
    height: 400,
    width: 170,
  },

  red: {
    height: 100,
    width: 100,
    backgroundColor: "red",
    borderRadius: "50%",
  },

  yellow: {
    height: 100,
    width: 100,
    backgroundColor: "yellow",
    borderRadius: "50%",
  },
  
  green: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    borderRadius: "50%",
  },
});