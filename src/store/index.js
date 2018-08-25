import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(
      thunk,
      logger
    )
  )

  return store
}

export default configureStore
