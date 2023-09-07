import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  UIManager,
} from "react-native";
import { AccordionList } from "react-native-accordion-list-view";
import QuizContent from "./QuizContent";
import QuizTitle from "./QuizTitle";
import { styles } from "./Quiz.styles";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase-config";

const Quizzes = ({ navigation }) => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  useEffect(() => {
    return onValue(ref(db, "/quiz"), (querySnapShot) => {
      const data = querySnapShot.val() || {};
      const dataArr = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      }));
      setDataArray(dataArr);
    });
  }, []);

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <ScrollView>
            <AccordionList
              data={dataArray}
              customTitle={(item) => (
                <QuizTitle
                  title={item?.title}
                  id={item?.id}
                  description={item?.desc}
                  points={item?.points}
                  timeLimit={item?.timeLimit}
                  questions={item?.questions}
                />
              )}
              customBody={(item) => (
                <QuizContent
                  description={item?.desc}
                  points={item?.points}
                  timeLimit={item?.timeLimit}
                />
              )}
              animationDuration={300}
              expandMultiple={true}
              containerItemStyle={styles.accordion}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.btn}
        onPress={() => navigation.navigate("CreateQuiz")}
      >
        <Text style={styles.txt}>Create Quiz</Text>
      </TouchableOpacity>
    </>
  );
};

export default Quizzes;
