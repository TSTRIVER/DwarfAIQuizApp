import React, { useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  UIManager,
} from "react-native";
import { AccordionList } from "react-native-accordion-list-view";
import QuestionTitle from "./QuestionTitle";
import QuestionContent from "./QuestionContent";
import { useSelector } from "react-redux";
import { styles } from "./View.styles";
import { useNavigation } from "@react-navigation/native";

const ViewQuestions = () => {
  const { questions } = useSelector((state) => state.Quiz);
  const navigation = useNavigation();

  useEffect(() => {
    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  const addQuestion = () => {
    navigation.navigate("CreateQuestions");
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <ScrollView>
            <AccordionList
              data={questions}
              customTitle={(item) => (
                <QuestionTitle
                  name={item?.desc}
                  options={item?.options}
                  selectedOptions={item?.selectedOptions}
                />
              )}
              customBody={(item) => (
                <QuestionContent
                  description={item?.desc}
                  options={item?.options}
                  selectedOptions={item?.selectedOptions}
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
        onPress={() => addQuestion()}
      >
        <Text style={styles.txt}>Add A Question</Text>
      </TouchableOpacity>
    </>
  );
};

export default ViewQuestions;
