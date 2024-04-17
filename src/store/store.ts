import {configureStore} from '@reduxjs/toolkit'
import sampleSlice, {initialStateSample} from './slices/sample'

export const reducers = {
  sample: sampleSlice.reducer,
}

export const initialState = {
  sample: initialStateSample,
}

export const store = configureStore({
  reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
