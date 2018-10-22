import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'

const addLoggerMiddleware = store => next => action => {
  console.group(action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  const returnValue = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return returnValue
}

const addThunkMiddleware = store =>  next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  return next(action)
};

const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(addLoggerMiddleware,addThunkMiddleware)
  )

  return store
}

export default configureStore
