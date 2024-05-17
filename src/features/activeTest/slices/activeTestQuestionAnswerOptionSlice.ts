import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ActiveTestState {
    questions: QuestionState[];
}

interface QuestionState {
    questionID: string;
    answers: number[];
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
            const { questionID, answers } = action.payload;

            const questionExists = state.questions.some(question => question.questionID === questionID);

            if (!questionExists) {
                state.questions.push(action.payload);
            } else {
                const existingQuestionIndex = state.questions.findIndex(question => question.questionID === questionID);

                state.questions[existingQuestionIndex].answers.push(...answers);
            }
        },
        addAnswer: (state, action: PayloadAction<OptionState>) => {
            const { questionID, optionNumber } = action.payload;

            const questionIndex = state.questions.findIndex(question => question.questionID === questionID);

            state.questions[questionIndex].answers.push(optionNumber);
        },
        removeAnswer: (state, action: PayloadAction<OptionState>) => {
            const { questionID, optionNumber } = action.payload;

            const questionIndex = state.questions.findIndex(question => question.questionID === questionID);

            if (state.questions[questionIndex].answers.includes(optionNumber)) {
                state.questions[questionIndex].answers = state.questions[questionIndex].answers.filter((answerOption: number) => answerOption !== optionNumber);
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