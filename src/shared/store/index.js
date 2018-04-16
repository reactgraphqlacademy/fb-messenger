import { createStore } from 'redux'
import reducers from '../reducers'

export const configureStore = (initialState) => {
  return createStore(reducers, initialState)
}
