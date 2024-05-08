import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ExpectedTestResultType } from "../types";

type TestResultState = {
    isTestFinished: boolean;
    result: ExpectedTestResultType[];
    totalDurationTimer: number;
    remainingDurationTimer: number;
};

const initialState: TestResultState = {
    isTestFinished: false,
    result: [],
    totalDurationTimer: 0,
    remainingDurationTimer: 0
};

export const testResultSlice = createSlice({
    name: "testResultSlice",
    initialState,
    reducers: {
        finishTest: (state, action: PayloadAction<boolean>) => {
            state.isTestFinished = action.payload;
        },
        resetTest: (state) => {
            state.isTestFinished = false;
        },
        setResult: (state, action: PayloadAction<[]>) => {
            state.result = action.payload;
        },
        setTotalDurationTimer: (state, action: PayloadAction<number>) => {
            state.totalDurationTimer = action.payload;
        },
        setRemainingDurationTimer: (state, action: PayloadAction<number>) => {
            state.remainingDurationTimer = action.payload;
        }
    }
});

export const {
    finishTest,
    resetTest,
    setResult,
    setTotalDurationTimer,
    setRemainingDurationTimer
} = testResultSlice.actions;
export default testResultSlice.reducer;