import { combineReducers } from 'redux'

import thread from './thread'
import ui from './ui'

export default combineReducers({
    thread,
    ui,
})
