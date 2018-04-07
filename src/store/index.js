// import { createStore } from 'redux'
import { createStore } from '../redux/createStore'
import reducers from '../reducers'

export const configureStore = (initialState) => {
  return createStore(reducers, initialState)
}
