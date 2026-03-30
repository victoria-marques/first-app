import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView10() {
  return <View style={styles.container}>
    <View style={styles.header}><Text>Header</Text></View>

    <View style={styles.containerCard}>
        <View style={styles.row1}>
            <View style={styles.card1}><Text>1</Text></View>
            <View style={styles.card2}><Text>2</Text></View>
            <View style={styles.card3}><Text>3</Text></View>
        </View>

        <View style={styles.row2}>
            <View style={styles.main}><Text>Main</Text></View>
            <View style={styles.sideBar}><Text>Barra lateral</Text></View>
        </View>
    </View>

    <View style={styles.footer}><Text>Footer</Text></View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  header: {
    height: 50,
    width: "100%",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },

  containerCard: {
    flex: 1,
    gap: 8
  },

  row1: {
    flexDirection: "row",
    height: 100,
    gap: 8,
  },

  row2: {
    flexDirection: "row",
    flex: 1,
    gap: 8
  },

  card1: {
    backgroundColor: "red",
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  card2: {
    backgroundColor: "blue",
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  card3: {
    backgroundColor: "yellow",
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  main: {
    flex: 2,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  sideBar: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  footer: {
    height: 40,
    width: "100%",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});