import { RECEIVE_THREAD } from '../actions/thread'
import { RECEIVE_MESSAGE } from '../actions/conversation'

export default function (state = null, action) {
  switch (action.type) {
    case RECEIVE_THREAD:
      return action.thread
    default:
      return state
  }
}
