import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ExpectedTestResultType } from "../types";

type TestResultState = {
    isTestFinished: boolean;
    result: ExpectedTestResultType[];
    durationTimer: number;
};

const initialState: TestResultState = {
    isTestFinished: false,
    result: [],
    durationTimer: 0
};

export const testResultSlice = createSlice({
    name: "testResultSlice",
    initialState,
    reducers: {
        finishTest: (state, action: PayloadAction<boolean>) => {
            state.isTestFinished = action.payload;
        },
        setResult: (state, action: PayloadAction<[]>) => {
            state.result = action.payload;
        },
        setDurationTimer: (state, action: PayloadAction<number>) => {
            state.durationTimer = action.payload;
        }
    }
});

export const { finishTest, setResult, setDurationTimer } = testResultSlice.actions;
export default testResultSlice.reducer;