import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./View.styles";
import { useDispatch } from "react-redux";
import { deleteQuestion } from "../../redux/QuizSlice";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

const QuestionTitle = ({ name,route }) => {
  const dispatch = useDispatch();

  const handleQuestionDelete = () => {
    if (name || route.params.name) {
      dispatch(deleteQuestion(name));
    }
  };

  return (
    <View style={styles.questionTitle}>
      <Text style={styles.titleText}>Question</Text>
      <View style={styles.iconsView}>
        <TouchableOpacity onPress={() => handleQuestionDelete()}>
          <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuestionTitle;
