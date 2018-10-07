import { combineReducers } from 'redux'
import {
    RECEIVE_THREAD,
    TOGGLE_MESSAGE_DETAIL,
    RECEIVE_MESSAGE
} from '../actions'

export function uiReducer(state = { isMessageDetailOpen: true }, action) {
    switch (action.type) {
        default:
            return state
    }
}

export function threadReducer(state = null, action) {
    switch (action.type) {
        case RECEIVE_THREAD:
            return action.thread
        default:
            return state
    }
}

export default combineReducers({
    ui: uiReducer,
    thread: threadReducer,
    // combineReducers can combine as many reducers as you need
})
