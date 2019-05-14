import { RECEIVE_CONVERSATION, RECEIVE_MESSAGE } from "../actions/messages";

export default function(state = [], action) {
  switch (action.type) {
    case RECEIVE_CONVERSATION:
      return action.messages;
    case RECEIVE_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
}
