import { configureStore } from '@reduxjs/toolkit';
import QuizReducer from './QuizSlice';

export const store = configureStore({
    reducer: {
       Quiz: QuizReducer
    }
});