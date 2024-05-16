import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ActiveTestQuestionNavigationState = {
    questionsStatus: QuestionStatusState[]
};

type QuestionStatusState = {
    questionNumber: number;
    isOptionChosen: boolean;
}

const initialState: ActiveTestQuestionNavigationState = {
    questionsStatus: []
};

export const activeTestQuestionNavigationSlice = createSlice({
    name: "activeTestQuestionNavigationSlice",
    initialState,
    reducers: {
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
        isAnswerChosen: (state) => {
            state.questionsStatus
        },
        clearQuestionStatus: (state) => {
            state.questionsStatus = []
        }
    }
});

export const {setQuestionStatus, activeQuestionStatus, clearQuestionStatus } = activeTestQuestionNavigationSlice.actions;

export default activeTestQuestionNavigationSlice.reducer;