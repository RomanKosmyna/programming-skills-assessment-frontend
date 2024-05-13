import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ActiveTestState {
    questions: QuestionState[];
}

interface QuestionState {
    questionID: string;
    arrayOfAnswers: number[];
}

interface OptionState {
    questionID: string;
    optionNumber: number;
}

const initialState: ActiveTestState = {
    questions: []
}

export const activeTestQuestionAnswerOptionSlice = createSlice({
    name: "activeTestQuestionAnswerOptionSlice",
    initialState,
    reducers: {
        addAnswerOptionWithNewArray: (state, action: PayloadAction<QuestionState>) => {
            const { questionID, arrayOfAnswers } = action.payload;

            const questionExists = state.questions.some(question => question.questionID === questionID);

            if (!questionExists) {
                state.questions.push(action.payload);
            } else {
                const existingQuestionIndex = state.questions.findIndex(question => question.questionID === questionID);

                state.questions[existingQuestionIndex].arrayOfAnswers.push(...arrayOfAnswers);
            }
        },
        addAnswer: (state, action: PayloadAction<OptionState>) => {
            const { questionID, optionNumber } = action.payload;

            const questionIndex = state.questions.findIndex(question => question.questionID === questionID);

            state.questions[questionIndex].arrayOfAnswers.push(optionNumber);
        },
        removeAnswer: (state, action: PayloadAction<OptionState>) => {
            const { questionID, optionNumber } = action.payload;

            const questionIndex = state.questions.findIndex(question => question.questionID === questionID);

            if (state.questions[questionIndex].arrayOfAnswers.includes(optionNumber)) {
                state.questions[questionIndex].arrayOfAnswers = state.questions[questionIndex].arrayOfAnswers.filter((answerOption: number) => answerOption !== optionNumber);
            }
        },
        clearQuestions: (state) => {
            state.questions = []
        }
    }
});

export const {
    addAnswerOptionWithNewArray,
    addAnswer,
    removeAnswer,
    clearQuestions,
} = activeTestQuestionAnswerOptionSlice.actions;
export default activeTestQuestionAnswerOptionSlice.reducer;