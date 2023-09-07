import { createSlice } from "@reduxjs/toolkit";

const Quiz = createSlice({
  name: "Quiz",
  initialState: {
    questions: [],
  },
  reducers: {
    setQuizQuestions(state, action) {
      if (Array.isArray(action.payload)) {
        state.questions.push(...action.payload);
      } else {
        state.questions.push(action.payload);
      }
    },
    resetQuizQuestions(state) {
      state.questions = [];
    },
    deleteQuestion(state, action) {
      return {
        ...state,
        questions: state.questions.filter(
          (item) => item.desc !== action.payload
        ),
      };
    },
  },
});

export const { setQuizQuestions, resetQuizQuestions, deleteQuestion } =
  Quiz.actions;
export default Quiz.reducer;
