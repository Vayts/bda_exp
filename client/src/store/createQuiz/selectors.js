export const getQuestionsForm = (state) => state.createQuiz.questions.questionList;
export const getActiveQuestion = (state) => state.createQuiz.questions.activeQuestion;
export const getQuizMainInfo = (state) => state.createQuiz.mainInfo;
export const getQuestion = (state) => state.createQuiz.questions;
export const getActiveQuestionItem = (state) => state.createQuiz.questions.questionList[state.createQuiz.questions.activeQuestion];
