import { configureStore } from '@reduxjs/toolkit'
import testDataReducer from '../features/counter/testDataSlice';
import activeTestReducer from "../features/activeTest/slices/activeTestSlice";

export const store = configureStore({
  reducer: {
    testData: testDataReducer,
    activeTest: activeTestReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;