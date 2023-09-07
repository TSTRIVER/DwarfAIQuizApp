import React from "react";
import { Text, View } from "react-native";
import { styles } from "./Play.styles";

const Result = ({ route }) => {
  const score = route.params?.score;
  const points = route.params?.points;
  const pointsPerQuestion = route.params?.pointsPerQuestion;
  const correctlyAnswered = score / pointsPerQuestion;
  const incorrectlyAnswered = (points - score) / pointsPerQuestion;

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.scoreTxt}>Your Score :- {score} Points</Text>
      <Text style={styles.scoreTxt}>
        Correct Answers :- {Math.round(correctlyAnswered)}
      </Text>
      <Text style={styles.scoreTxt}>
        Incorrect Answers :- {Math.round(incorrectlyAnswered)}
      </Text>
    </View>
  );
};

export default Result;
