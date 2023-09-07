import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux/ConfigureStore";
import StackNavigators from "./StackNavigators";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigators />
      </NavigationContainer>
    </Provider>
  );
}
