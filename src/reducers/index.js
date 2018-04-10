import { combineReducers } from 'redux'

// hint, maybe you should do something with this imported thread...
import thread from './thread'
import ui from './ui'

export default combineReducers({
    ui,
    // combineReducers can combine as many reducers as you need
})
