import { RECEIVE_CONVERSATIONS, RECEIVE_MESSAGE } from '../actions/conversation'

export default function (state = [], action) {
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      return [...state, ...action.conversations]
    case RECEIVE_MESSAGE:
      return [...state, action.message]
    default:
      return state
  }
}
