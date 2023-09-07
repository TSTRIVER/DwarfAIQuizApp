import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderBackButton } from "@react-navigation/elements";
import Homepage from "./Homepage";
import Quizzes from "./Components/Quizzes/Quizzes";
import CreateQuiz from "./Components/CreateQuiz/CreateQuiz";
import CreateQuestions from "./Components/CreateQuestions/CreateQuestions";
import ViewQuestions from "./Components/ViewQuestions/ViewQuestions";
import PlayQuiz from "./Components/PlayQuiz/PlayQuiz";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { resetQuizQuestions } from "./redux/QuizSlice";
import Result from "./Components/PlayQuiz/Result";
import { Alert } from "react-native";

const Stack = createNativeStackNavigator();

export default function StackNavigators() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleCreateQuizBackPress = () => {
    Alert.alert(
      "Save Changes !",
      "Please Save the Quiz as changes will be lost",
      [
        {
          text: "Cancel",
          onPress: () => {
            dispatch(resetQuizQuestions());
            navigation.goBack();
          },
          style: "cancel",
        },
        {
          text: "OK",
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  const handleQuizPlayBackPress = () => {
    Alert.alert(
      "End Quiz ?",
      "Quiz will end and you won't be evaluated",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Agree",
          onPress: () => {
            navigation.goBack();
          },
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  const handleResultsBackPress = () => {
     navigation.navigate("Quizzes");
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Homepage}
        options={{ title: "Dwarf-AI Quizzer" }}
      />
      <Stack.Screen
        name="Quizzes"
        component={Quizzes}
        options={{ title: "Your Quizzes" }}
      />
      <Stack.Screen
        name="CreateQuiz"
        component={CreateQuiz}
        options={{
          title: "Create Quiz",
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => handleCreateQuizBackPress()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="PlayQuiz"
        component={PlayQuiz}
        options={{
          title: "Dwarf AI Quiz PlayGround",
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => handleQuizPlayBackPress()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CreateQuestions"
        component={CreateQuestions}
        options={{ title: "Create Question" }}
      />
      <Stack.Screen
        name="ViewQuestions"
        component={ViewQuestions}
        options={{ title: "Quiz Questions" }}
      />
      <Stack.Screen
        name="ResultsPage"
        component={Result}
        options={{ title: "Your Result",
        headerLeft: (props) => (
          <HeaderBackButton
            {...props}
            onPress={() => handleResultsBackPress()}
          />
        ),
      }}
      />
    </Stack.Navigator>
  );
}
