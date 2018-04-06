import { RECEIVE_CONVERSATION, RECEIVE_MESSAGE } from '../actions/conversation'

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_CONVERSATION:
      return { ...state, [action.username]: action.conversation }
    case RECEIVE_MESSAGE:
      return {
        ...state,
        [action.message.to]: [...state[action.message.to], action.message]
      }
    default:
      return state
  }
}
