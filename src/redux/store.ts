import { configureStore } from '@reduxjs/toolkit'
import activeTestReducer from "../features/activeTest/slices/activeTestSlice";
import activeInstructionStepSliceReducer from "../features/home/slices/activeInstructionStepSlice";

export const store = configureStore({
  reducer: {
    activeTest: activeTestReducer,
    activeInstructionStep: activeInstructionStepSliceReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;