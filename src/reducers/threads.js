import { RECEIVE_THREADS } from "../actions/thread";
import { RECEIVE_MESSAGE } from "../actions/messages";

export default function(state = [], action) {
  switch (action.type) {
    case RECEIVE_THREADS:
      return action.threads;
    case RECEIVE_MESSAGE:
      return { ...state, lastMessage: action.message };
    default:
      return state;
  }
}
