import { TOGGLE_MESSAGE_DETAIL } from "../actions/ui";

export const getInitialState = () => ({ isMessageDetailOpen: false });

export default function(state = getInitialState(), action) {
  switch (action.type) {
    case TOGGLE_MESSAGE_DETAIL:
      return { ...state, isMessageDetailOpen: !state.isMessageDetailOpen };
    default:
      return state;
  }
}
