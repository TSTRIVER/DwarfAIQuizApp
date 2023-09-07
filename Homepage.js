import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { getScreenDimensions } from "./util";

const Homepage = ({ navigation }) => {
  const { width, height } = getScreenDimensions;

  const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
      backgroundColor: "blanchedalmond",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    btn: {
      backgroundColor: "lightblue",
      borderRadius: 10,
      width: width * 0.5,
      height: height * 0.1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    txt: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.6}
        onPress={() => navigation.navigate("Quizzes")}
      >
        <Text style={styles.txt}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Homepage;
