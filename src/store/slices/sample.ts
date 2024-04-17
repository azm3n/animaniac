import {createSlice} from '@reduxjs/toolkit'

type InitialStateProps = {
  value: number
}

export const initialStateSample: InitialStateProps = {
  value: 0,
}

const sampleSlice = createSlice({
  name: 'sample',
  initialState: initialStateSample,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
  },
})

export const sampleActions = sampleSlice.actions
export default sampleSlice
