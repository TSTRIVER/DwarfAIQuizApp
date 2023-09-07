import { Dimensions} from "react-native";

export const getScreenDimensions = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
}