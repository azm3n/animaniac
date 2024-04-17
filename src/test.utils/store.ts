import {configureStore} from '@reduxjs/toolkit'
import {initialState, reducers} from '../store/store'

export const setupUniqueStore = () => {
  return configureStore({reducer: reducers, preloadedState: initialState})
}
