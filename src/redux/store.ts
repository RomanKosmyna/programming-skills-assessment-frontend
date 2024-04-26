import { configureStore } from '@reduxjs/toolkit'
import testDataReducer from '../features/counter/testDataSlice';

export const store = configureStore({
  reducer: {
    testData: testDataReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;