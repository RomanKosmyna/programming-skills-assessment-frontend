import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../redux/store'

// Define a type for the slice state
interface TestDataState {
  value: any
}

// Define the initial state using that type
const initialState: TestDataState = {
  value: [],
}

export const testDataSlice = createSlice({
  name: 'testData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.value = action.payload
    },
  },
})

export const { setData } = testDataSlice.actions;

export const getData = (state: RootState) => state.testData.value;

export default testDataSlice.reducer;