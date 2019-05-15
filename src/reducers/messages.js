import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from "../actions/conversation";

export default function(state = [], action) {
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.conversation;
    case RECEIVE_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
}
