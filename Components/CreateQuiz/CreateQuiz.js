import React, { useState, useEffect} from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./CreateQuiz.styles";
import {useSelector,useDispatch} from "react-redux";
import { resetQuizQuestions } from "../../redux/QuizSlice";
import { ref, push, update } from "firebase/database";
import { db } from "../../firebase-config";
import { BackHandler } from "react-native";

const CreateQuiz = ({ navigation, route }) => {
  const [title, setTitle] = useState(route.params?.title ?? "");
  const [desc, setDesc] = useState(route.params?.description ?? "");
  const [points, setPoints] = useState(route.params?.points ?? "");
  const [timeLimit, setTimeLimit] = useState(route.params?.timeLimit ?? "");

  const { questions } = useSelector((state) => state.Quiz);
  const dispatch = useDispatch();

  const addQuizOnSubmit = () => {
    if(!questions.length){
       alert('Please Add Atleast 1 Question');
       return;
    }
    if (route.params) {
      const quizRef = ref(db, `/quiz/${route.params?.id}`);
      update(quizRef, {
        title,
        desc,
        points,
        timeLimit,
        questions,
      });
    } else {

      push(ref(db, "/quiz"), {
        title,
        desc,
        points,
        timeLimit,
        questions,
      });
      setTitle("");
      setDesc("");
      setPoints(""), setTimeLimit("");
    }
    dispatch(resetQuizQuestions());
    navigation.navigate("Quizzes");
  };

  const addQuestionOnSubmit = () => {
    navigation.navigate("CreateQuestions");
  };

  function handleBackButtonClick() {
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setTitle}
          value={title}
          placeholder="Enter Quiz Title"
        />
        <TextInput
          style={styles.txtarea}
          multiline={true}
          numberOfLines={4}
          onChangeText={setDesc}
          value={desc}
          placeholder="Enter Quiz Description"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPoints}
          value={points}
          placeholder="Enter Max. Quiz Points"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setTimeLimit}
          value={timeLimit}
          placeholder="Enter Time Limit (in minutes)"
          keyboardType="numeric"
        />
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.btn}
          onPress={() => addQuizOnSubmit()}
        >
          <Text style={styles.txt}>{route.params ? "Save" : "Add"} Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.btn}
          onPress={() => addQuestionOnSubmit()}
        >
          <Text style={styles.txt}>
            {route.params ? "Modify" : "Add"} Questions
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CreateQuiz;
