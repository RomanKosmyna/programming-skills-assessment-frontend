import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ExpectedTestResultType } from "../types";
import { TestResultGeneralInfoType } from "../../../redux/types/testResultTypes";

type TestResultState = {
    isTestFinished: boolean;
    testCategoryID: string | null;
    testName: string | null;
    testID?: string | null;
    result: ExpectedTestResultType[];
    totalDurationTimer: number;
    remainingDurationTimer: number;
    completionHour: string | null;
    completionDate: string | null;
};

const initialState: TestResultState = {
    isTestFinished: false,
    testCategoryID: null,
    testName: null,
    testID: null,
    result: [],
    totalDurationTimer: 0,
    remainingDurationTimer: 0,
    completionHour: null,
    completionDate: null
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
        setGeneralTestInformation: (state, action: PayloadAction<TestResultGeneralInfoType>) => {
            const { testCategoryID, testID, testName } = action.payload;

            state.testID = testID;
            state.testCategoryID = testCategoryID;
            state.testName = testName;
        },
        setCompletionHour: (state, action: PayloadAction<string>) => {
            state.completionHour = action.payload;
        },
        setCompletionDate: (state, action: PayloadAction<string>) => {
            state.completionDate = action.payload;
        },
        setResult: (state, action: PayloadAction<ExpectedTestResultType[]>) => {
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
    setGeneralTestInformation,
    setCompletionHour,
    setCompletionDate,
    setResult,
    setTotalDurationTimer,
    setRemainingDurationTimer
} = testResultSlice.actions;
export default testResultSlice.reducer;