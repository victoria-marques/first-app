import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
  return <View style={styles.container}>
        <View style={styles.sideBar}><Text style={styles.textStyle}>Sidebar</Text></View>
        <View style={styles.containerCard}>
            <View style={styles.greenCard}><Text style={styles.textStyle}>Card 1</Text></View>
            <View style={styles.yellowCard}><Text style={styles.textStyle}>Card 2</Text></View>
            <View style={styles.blueCard}><Text style={styles.textStyle}>Card 3</Text></View>
        </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  containerCard: {
    flex: 1,
    gap: 8,
    padding: 10,
  },

  sideBar: {
    backgroundColor: "gray",
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },

  yellowCard: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },

  greenCard: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  
  blueCard: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});