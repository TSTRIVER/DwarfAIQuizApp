import { StyleSheet } from "react-native";
import { getScreenDimensions } from "../../util";

const {width,height} = getScreenDimensions;

export const styles = StyleSheet.create({
  screenContainer: {
    width,
    height,
    backgroundColor: "blanchedalmond",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  optiontxt: {
    marginLeft: 20,
    marginBottom: 20,
  },
  questiontxt: {
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "skyblue",
    width: width * 0.5,
    height: height * 0.08,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "aqua",
    borderRightColor: "aqua",
  },
  txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  scoreTxt: {
    fontWeight: "bold",
    fontSize: 20
  }
});
