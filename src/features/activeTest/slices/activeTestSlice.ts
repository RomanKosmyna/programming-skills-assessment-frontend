import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../redux/store";

interface ActiveTestState {
    questions: QuestionState[];
}

interface QuestionState {
    questionID: string | null;
    arrayOfAnswers: any[];
}

const initialState: ActiveTestState = {
    questions: []
}

export const activeTestSlice = createSlice({
    name: "activeTest",
    initialState,
    reducers: {
        addUserAnswerOptionIntoArray: (state, action: PayloadAction<QuestionState>) => {
            const { questionID, arrayOfAnswers } = action.payload;

            const questionExists = state.questions.some(question => question.questionID === questionID);

            if (!questionExists) {
                state.questions.push(action.payload);
            } else {
                const existingQuestionIndex = state.questions.findIndex(question => question.questionID === questionID);

                

                state.questions[existingQuestionIndex].arrayOfAnswers.push(...arrayOfAnswers);
            }
        },
        // addUserAnswer: (state, action: PayloadAction<any>) => {
        //     if (!state.value.includes(action.payload)) {
        //         state.questionID = action.payload.questionID;
        //         state.value.push(action.payload.arrayOfAnswers);
        //     }
        // },
        // addUserAnswerIntoExistingArray: (state, action: PayloadAction<number>) => {
        //     state.value.push(action.payload);
        // },
        // removeUserAnswer: (state, action: PayloadAction<any>) => {
        //     if (state.value.includes(action.payload)) {
        //         state.value = state.value.filter((answerOption: number) => answerOption != action.payload);
        //     }
        // }
    }
});

export const selectExistingQuestion = createSelector(
    (state: RootState) => state.activeTest.questions,
    (value) => value.length
);

export const { addUserAnswerOptionIntoArray } = activeTestSlice.actions;
//addUserAnswer, addUserAnswerIntoExistingArray, removeUserAnswer
export default activeTestSlice.reducer;