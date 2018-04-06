import { RECEIVE_THREAD } from '../actions/thread'
import { RECEIVE_MESSAGE, DELETE_MESSAGE } from '../actions/conversation'

export default function (state = null, action) {
  switch (action.type) {
    case RECEIVE_THREAD:
      return action.thread
    case RECEIVE_MESSAGE:
      return { ...state, lastMessage: action.message }
    // case DELETE_MESSAGE:
    //   return { ...state, lastMessage: action.message }
    default:
      return state
  }
}
