import { combineReducers } from 'redux'

import conversation from './conversation'
import thread from './thread'
import ui from './ui'

export default combineReducers({
    conversation,
    thread,
    ui,
})
