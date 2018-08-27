import { combineReducers } from 'redux'

import conversation from './conversation'
import threads from './threads'
import ui from './ui'

export default combineReducers({
    conversation,
    threads,
    ui,
})
