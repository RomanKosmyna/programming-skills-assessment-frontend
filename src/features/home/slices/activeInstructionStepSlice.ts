import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type ActiveInstructionStepState = {
    isStepperActive: boolean;
    activeStep: number;
};

const initialState: ActiveInstructionStepState = {
    isStepperActive: true,
    activeStep: 0,
}

export const activeInstructionStepSlice = createSlice({
    name: "activeInstructionStep",
    initialState,
    reducers: {
        changeStepperStatus: (state, action: PayloadAction<boolean>) => {
            state.isStepperActive = action.payload;
        },
        activeQuestionStatus: (state, action: PayloadAction<number>) => {
            state.activeStep = action.payload;
        }
    }
});

export const { changeStepperStatus, activeQuestionStatus } = activeInstructionStepSlice.actions;
export default activeInstructionStepSlice.reducer;