import { StyleSheet} from "react-native";
import { getScreenDimensions } from "../../util";

const {height,width} = getScreenDimensions;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "blanchedalmond",
        width,
        height: height*0.845
    },
    btn: {
        backgroundColor:"skyblue",
        height: height*0.08,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    txt: {
        color: "white",
        fontWeight:"bold",
        fontSize: 20
    },
    quizCards: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    quizCards_inner:{
        width,
        paddingTop: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    quizTitle : {
        width: width*0.8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    quizDescription: {
         marginTop: 10,
         textAlign: "justify"
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
    accordion:{
        backgroundColor: "lightgreen",
        marginTop: 15
    }
})