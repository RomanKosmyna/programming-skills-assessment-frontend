import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ActiveTestState {
    questions: QuestionState[];
    questionsStatus: QuestionStatusState[]
}

interface QuestionState {
    questionID: string;
    arrayOfAnswers: number[];
}

interface OptionState {
    questionID: string;
    optionNumber: number;
}

interface QuestionStatusState {
    questionNumber: number;
    isOptionChosen: boolean;
}

const initialState: ActiveTestState = {
    questions: [],
    questionsStatus: []
}

export const activeTestSlice = createSlice({
    name: "activeTest",
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
        },
        setQuestionStatus: (state, action: PayloadAction<QuestionStatusState>) => {
            const { questionNumber } = action.payload;
            const questionStatusIndex = state.questionsStatus.findIndex(questionsStatus => questionsStatus.questionNumber === questionNumber);

            if (questionStatusIndex === -1) {
                state.questionsStatus.push(action.payload);
            }
        },
        activeQuestionStatus: (state, action: PayloadAction<QuestionStatusState>) => {
            const { questionNumber } = action.payload;

            const questionStatusIndex = state.questionsStatus.findIndex(questionsStatus => questionsStatus.questionNumber === questionNumber);

            state.questionsStatus[questionStatusIndex] = action.payload;
        },
        clearQuestionStatus: (state) => {
            state.questionsStatus = []
        }
    }
});

export const {
    addAnswerOptionWithNewArray,
    addAnswer,
    removeAnswer,
    clearQuestions,
    setQuestionStatus,
    activeQuestionStatus,
    clearQuestionStatus
} = activeTestSlice.actions;
export default activeTestSlice.reducer;