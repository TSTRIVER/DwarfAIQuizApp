import React, { useState} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { setQuizQuestions} from "../../redux/QuizSlice";
import { styles } from "./Question.styles";
import { useNavigation } from "@react-navigation/native";

const CreateQuestions = () => {

 const [desc, setDesc] = useState("");
  const [options, setOptions] = useState([
    { text: "", selected: false },
    { text: "", selected: false },
  ]);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const ViewQuestions = () => {
    navigation.navigate("ViewQuestions");
  };

  const toggleOptionSelected = (index) => {
    setOptions((prevOptions) =>
      prevOptions.map((opt, idx) =>
        idx === index ? { ...opt, selected: !opt.selected } : opt
      )
    );
  };

  const updateOptionText = (text, index) => {
    setOptions((prevOptions) =>
      prevOptions.map((opt, idx) => (idx === index ? { ...opt, text } : opt))
    );
  };

  const addOption = () => {
    setOptions([...options, { text: "", selected: false }]);
  };

  const removeOption = () => {
    if (options.length > 1) {
      const newOptions = [...options];
      newOptions.pop();
      setOptions(newOptions);
    }
  };

  const addTheQuestion = () => {
    const questionOptions = options.map((opt) => opt.text);
    const selectedOptionsIndices = options
      .map((opt, index) => (opt.selected ? index : null))
      .filter((index) => index !== null);
    const question = {
      desc,
      options: questionOptions,
      selectedOptions: selectedOptionsIndices,
    };

    dispatch(setQuizQuestions(question));

    setDesc("");
    setOptions([
      { text: "", selected: false },
      { text: "", selected: false },
    ]);

    navigation.navigate("ViewQuestions",{
       name: desc
    });
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <TextInput
            style={styles.txtarea}
            multiline={true}
            numberOfLines={4}
            onChangeText={setDesc}
            value={desc}
            placeholder="Enter Question Description"
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity onPress={() => addOption()}>
              <Text>Add Option</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => removeOption()}>
              <Text>Remove Option</Text>
            </TouchableOpacity>
          </View>
          {options.map((option, index) => (
            <React.Fragment key={index}>
              <TextInput
                style={styles.optiontxt}
                onChangeText={(text) => updateOptionText(text, index)}
                value={option.text}
                placeholder={`Enter Option ${index + 1}`}
              />
              <TouchableOpacity onPress={() => toggleOptionSelected(index)}>
                <View
                  style={{
                    marginLeft: 10,
                    color: "green",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text>{option.selected ? "✔" : " "}</Text>
                  <Text style={{ marginLeft: 10, color: "green" }}>
                    {`Mark Option ${index + 1} as one of the answers`}
                  </Text>
                </View>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </ScrollView>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.btn}
          onPress={() => addTheQuestion()}
        >
          <Text style={styles.txt}>Add the Question</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.btn}
          onPress={() => ViewQuestions()}
        >
          <Text style={styles.txt}>View Questions</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CreateQuestions;
