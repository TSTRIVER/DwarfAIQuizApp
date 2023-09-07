import React, { useState, useEffect, useRef } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./Play.styles";
import { useNavigation } from "@react-navigation/native";

const PlayQuiz = ({ route }) => {
  const [timeRemaining, setTimeRemaining] = useState(
    route.params?.timeLimit * 60
  );
  const [selectedOptions, setSelectedOptions] = useState([]);
  const questions = route.params?.questions;
  const currentIndex = useRef(0);

  const [score, setScore] = useState(0);
  const points = route.params?.points;
  const pointsPerQuestion = points / questions.length;
  const navigation = useNavigation();

  useEffect(() => {
    if (timeRemaining > 0) {
      const timerId = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    } else {
      navigation.navigate("ResultsPage",{
        score,
        pointsPerQuestion,
        points
    });
    }
  }, [timeRemaining]);

  const toggleOptionSelection = (idx) => {
    if (selectedOptions.includes(idx)) {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((option) => option !== idx)
      );
    } else {
      setSelectedOptions((prevOptions) => [...prevOptions, idx]);
    }
  };

  const isMatch = () => {
    const correctOptions = questions[currentIndex.current]?.selectedOptions;
    if (selectedOptions.length !== correctOptions.length) return false;

    const sortedArr1 = [...selectedOptions].sort((a, b) => a - b);
    const sortedArr2 = [...correctOptions].sort((a, b) => a - b);

    for (let i = 0; i < sortedArr1.length; i++) {
      if (sortedArr1[i] !== sortedArr2[i]) return false;
    }
    return true;
  };

  const nextQuestion = () => {
    if (isMatch()) {
      setScore((prev) => parseFloat((prev + pointsPerQuestion).toFixed(2)));
    }

    console.log(score);
    if (currentIndex.current < questions.length - 1) {
      currentIndex.current++;
      setSelectedOptions([]); 
    } else {
      alert("Quiz finished. Press End Quiz to Submit Answers!");
    }
  };

  const endQuiz = () => {
     navigation.navigate("ResultsPage",{
         score,
         pointsPerQuestion,
         points
     });
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: "right", margin: 10 }}>
        {Math.floor(timeRemaining / 60)}:
        {timeRemaining % 60 < 10
          ? `0${timeRemaining % 60}`
          : timeRemaining % 60}
      </Text>

      <ScrollView>
        <Text style={styles.questiontxt}>
          {questions[currentIndex.current].desc}
        </Text>
        {questions[currentIndex.current].options.map((option, idx) => (
          <TouchableOpacity
            key={idx}
            style={{
              backgroundColor: selectedOptions.includes(idx)
                ? "lightblue"
                : "white",
            }}
            onPress={() => toggleOptionSelection(idx)}
          >
            <Text style={styles.optiontxt}>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TouchableOpacity
          onPress={nextQuestion}
          activeOpacity={0.6}
          style={styles.btn}
        >
          <Text style={styles.txt}>Next Question</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.btn} onPress={()=>endQuiz()}>
          <Text style={styles.txt}>End Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayQuiz;
