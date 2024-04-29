import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ActiveTestState {
    questionID: string | null,
    value: any
}

const initialState: ActiveTestState = {
    questionID: null,
    value: [],
}

export const activeTestSlice = createSlice({
    name: "activeTest",
    initialState,
    reducers: {
        addUserAnswer: (state, action: PayloadAction<any>) => {
            if (!state.value.includes(action.payload)) {
                state.questionID = action.payload.questionID;
                state.value.push(action.payload.arrayOfAnswers);
            }
        },
        removeUserAnswer: (state, action: PayloadAction<any>) => {
            if (state.value.includes(action.payload)) {
                state.value = state.value.filter((answerOption: number) => answerOption != action.payload);
            }
        }
    }
});

export const { addUserAnswer, removeUserAnswer } = activeTestSlice.actions;

export default activeTestSlice.reducer;