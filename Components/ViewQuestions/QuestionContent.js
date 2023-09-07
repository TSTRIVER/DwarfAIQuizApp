import React from "react";
import { styles } from "./View.styles";
import { Text, View } from "react-native";

const QuestionContent = ({description,options,selectedOptions}) => {
  return (
    <View style={styles.questionCards}>
      <View>
        <Text style={styles.questionDescription}>
         {description}
        </Text>
      </View>
      <View style={styles.questionCards_inner}>
        <Text>Options : {options.length}</Text>
        <Text>Answers : {selectedOptions.length}</Text>
      </View>
    </View>
  );
};

export default QuestionContent;
