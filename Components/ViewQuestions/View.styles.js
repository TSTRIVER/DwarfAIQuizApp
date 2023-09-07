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
  btn: {
    backgroundColor: "skyblue",
    width: width,
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
  accordion: {
    backgroundColor: "lightgreen",
    marginTop: 15,
  },
  questionTitle: {
    width: width * 0.8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  titleText: {
    fontWeight:"bold",
    marginLeft: 10
 },
 iconsView: {
     width: width*0.4,
     display: "flex",
     flexDirection: "row",
     justifyContent:"space-around",
 },
 questionCards: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
},
questionCards_inner:{
  width,
  paddingTop: 15,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
},
questionDescription: {
  marginTop: 10,
  textAlign: "justify",
  fontWeight:"bold"
},
});
