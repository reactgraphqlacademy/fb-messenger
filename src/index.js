import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './store'
import rootSaga from './sagas'
import Root from './components/Root'
import './styles/index.css'

const store = configureStore()
store.runSaga(rootSaga)

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
