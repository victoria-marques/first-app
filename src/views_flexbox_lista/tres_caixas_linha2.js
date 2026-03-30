import { StyleSheet, Text, View } from "react-native";

export default function ExercicioCaixasLinha2() {
  return <View style={styles.container}>
   <Text style={styles.titulo}>Três Caixas em Linha</Text>
   
   <View style={{flexDirection: "row", gap: 8}}>
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
