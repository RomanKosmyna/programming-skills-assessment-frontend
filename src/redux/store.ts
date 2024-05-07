import { configureStore } from '@reduxjs/toolkit'
import activeTestReducer from "../features/activeTest/slices/activeTestSlice";
import activeInstructionStepReducer from "../features/home/slices/activeInstructionStepSlice";
import testResultReducer from "../features/activeTest/slices/testResultSlice";

export const store = configureStore({
  reducer: {
    activeTest: activeTestReducer,
    activeInstructionStep: activeInstructionStepReducer,
    testResult: testResultReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;