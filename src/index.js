import React from 'react'
import ReactDOM from 'react-dom'

import { configureStore } from "./store"
import Root from './Components/Root'
import "./styles/index.css"

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
