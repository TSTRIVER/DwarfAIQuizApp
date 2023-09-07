import React from "react";
import { styles } from "./Quiz.styles";
import { Text, View } from "react-native";

const QuizContent = ({description,points,timeLimit}) => {
  return (
    <View style={styles.quizCards}>
      <View>
        <Text style={styles.quizDescription}>
         {description}
        </Text>
      </View>
      <View style={styles.quizCards_inner}>
        <Text>{points} points</Text>
        <Text>{timeLimit} minutes</Text>
      </View>
    </View>
  );
};

export default QuizContent;
