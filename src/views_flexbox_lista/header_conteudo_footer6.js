import { StyleSheet, Text, View } from "react-native";

export default function ExercicioHeaderFooter6() {
  return <View style={styles.container}>
      <View style={{flexDirection: "column", width: "100%", height: "100%"}}>
        <View style={styles.header}><Text style={style.textStyle}>Header</Text></View>
        <View style={styles.main}><Text style={style.textStyle}>Main Content</Text></View>
        <View style={styles.footer}><Text style={style.textStyle}>Footer</Text></View>
      </View>
  </View>;
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
  header: {
    height: 60,
    width: "100%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "100%",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  footer: {
    height: 50,
    width: "100%",
    backgroundColor: "blue",
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