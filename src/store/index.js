import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'

const addLoggerMiddleware = store => {
  const rawDispatch = store.dispatch
  return (action) => {
    console.group(action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    const returnValue = rawDispatch(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

const addThunkMiddleware = store => {

};

const configureStore = () => {
  const store = createStore(
    reducers
  )

  store.dispatch = addLoggerMiddleware(store)

  return store
}

export default configureStore
