import { TOGGLE_MESSAGE_DETAIL } from '../actions/ui'

export default function (state = { isMessageDetailOpen: false }, action) {
  switch (action.type) {
    case TOGGLE_MESSAGE_DETAIL:
      return { ...state, isMessageDetailOpen: !state.isMessageDetailOpen }
    default:
      return state
  }
}
