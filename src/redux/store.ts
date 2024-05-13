import { configureStore } from '@reduxjs/toolkit'
import activeTestQuestionAnswerOptionReducer from "@features/activeTest/slices/activeTestQuestionAnswerOptionSlice";
import activeInstructionStepReducer from "@features/home/slices/activeInstructionStepSlice";
import testResultReducer from "@features/activeTest/slices/testResultSlice";
import activeTestTimerReducer from "@features/activeTest/slices/activeTestTimerSlice";
import activeTestQuestionNavigationReducer from "@features/activeTest/slices/activeTestQuestionNavigationSlice";

export const store = configureStore({
  reducer: {
    activeInstructionStep: activeInstructionStepReducer,
    activeTestTimer: activeTestTimerReducer,
    activeTestQuestionAnswerOption: activeTestQuestionAnswerOptionReducer,
    activeTestQuestionNavigation: activeTestQuestionNavigationReducer,
    testResult: testResultReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;