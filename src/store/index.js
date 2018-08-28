import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducers,
    applyMiddleware(
      thunk,
      logger,
      sagaMiddleware,
    )
  )

  return {
    ...store,
    runSaga: sagaMiddleware.run
  }
}

export default configureStore
