import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const createNewQuizForTopicId = (quiz) => {
  const { id, topicId } = quiz;

  const newQuiz = { quizId: id, topicId: topicId };

  console.log(quiz, newQuiz);

  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizId(newQuiz));
  };
};

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, topicId, name, cardIds } = action.payload;
      state.quizzes[id] = {
        id,
        topicId,
        name,
        cardIds
      };
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
