import { StyleSheet } from "react-native";
import { getScreenDimensions } from "../../util";

const { height, width } = getScreenDimensions;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "blanchedalmond",
    width: width,
    height: height * 0.845,
    display: "flex",
    flexDirection: "column",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  btn: {
    backgroundColor: "skyblue",
    width: width*0.5,
    height: height * 0.08,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "aqua",
    borderRightColor: "aqua"
  },
  txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  txtarea:{
    height: height*0.25,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    textAlignVertical : "top"
  }
});
