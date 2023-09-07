import React from "react";
import { styles } from "./Quiz.styles";
import { TouchableOpacity, View, Text } from "react-native";
import { setQuizQuestions } from "../../redux/QuizSlice";
import { useDispatch } from "react-redux";
import { ref, remove } from "firebase/database";
import { db } from "../../firebase-config";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";

const QuizTitle = ({ id, ...props }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const deleteQuiz = () => {
    const itemRef = ref(db, `/quiz/${id}`);
    remove(itemRef);
  };

  const editQuiz = () => {
    const questionsData = props.questions;
    dispatch(setQuizQuestions(questionsData));
    navigation.navigate("CreateQuiz", {
      title: props.title,
      description: props.description,
      timeLimit: props.timeLimit,
      points: props.points,
      id,
    });
  };

  const playQuiz = () => {
    navigation.navigate("PlayQuiz", {
      title: props.title,
      description: props.description,
      timeLimit: props.timeLimit,
      points: props.points,
      questions: props.questions,
    });
  };

  return (
    <View style={styles.quizTitle}>
      <Text style={styles.titleText}>{props.title}</Text>
      <View style={styles.iconsView}>
        <TouchableOpacity onPress={() => playQuiz()}>
          <FontAwesomeIcon icon={faPlay} style={{ color: "green" }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => editQuiz()}>
          <FontAwesomeIcon icon={faEdit} style={{ color: "blue" }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteQuiz()}>
          <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuizTitle;
