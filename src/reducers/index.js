import { combineReducers } from "redux";
import QuestionReducer from './question_reducers';
//import quizQuestions from './questions';

export const rootReducer = combineReducers({
   
    quest:QuestionReducer
})