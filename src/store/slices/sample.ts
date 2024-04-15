import {createSlice} from '@reduxjs/toolkit'

type InitialStateProps = {
  value: number
}

const initialState: InitialStateProps = {
  value: 0,
}

const sampleSlice = createSlice({
  name: 'sample',
  initialState,
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
