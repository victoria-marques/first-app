import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07() {
  return <View style={styles.container}>
    <View style={{flexDirection: "column", gap: 10, width: "100%", height: "100%"}}>
        <View style={styles.row}>
            <View style={styles.greenBox}></View>
            <View style={styles.redBox}></View>
        </View>
        <View style={styles.row}>
            <View style={styles.blueBox}></View>
            <View style={styles.orangeBox}></View>
        </View>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flex: 1,
    gap: 18,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  row: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
  },

  redBox: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  greenBox: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  
  blueBox: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },

  orangeBox: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});