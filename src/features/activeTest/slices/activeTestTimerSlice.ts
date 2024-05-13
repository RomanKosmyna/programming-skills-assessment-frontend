import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ActiveTestStateType = {
    testID: string | undefined;
    testName: string | undefined;
    initialDurationTime: number | undefined;
}

const initialState: ActiveTestStateType = {
    testID: undefined,
    testName: undefined,
    initialDurationTime: undefined
};

export const activeTestTimerSlice = createSlice({
    name: "activeTestTimerSlice",
    initialState,
    reducers: {
        setInitialTimerData: (state, action: PayloadAction<{
            testID: string | undefined;
            testName: string | undefined;
            durationMinutes: number | undefined;
        }>) => {
            state.testID = action.payload.testID;
            state.testName = action.payload.testName;
            state.initialDurationTime = action.payload.durationMinutes;
        }
    }
});

export const { setInitialTimerData } = activeTestTimerSlice.actions;

export default activeTestTimerSlice.reducer;