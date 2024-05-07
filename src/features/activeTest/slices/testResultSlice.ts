import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TestResultState = {
    isTestFinished: boolean;
};

const initialState: TestResultState = {
    isTestFinished: false,
};

export const testResultSlice = createSlice({
    name: "testResultSlice",
    initialState,
    reducers: {
        finishTest: (state, action: PayloadAction<boolean>) => {
            state.isTestFinished = action.payload;
        }
    }
});

export const { finishTest } = testResultSlice.actions;
export default testResultSlice.reducer;