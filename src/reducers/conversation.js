import { createSelector } from 'reselect'
import {
  RECEIVE_CONVERSATION,
  RECEIVE_MESSAGE,
  LOADING_CONVERSATION
} from '../actions/conversation'

export default function (state = { data: [], loading: false }, action) {
  switch (action.type) {
    case RECEIVE_CONVERSATION:
      return {...state, data: [...state.data, ...action.conversation] }
    case RECEIVE_MESSAGE:
      return {
        ...state,
        data: [...state.data, action.message]
      }
    case LOADING_CONVERSATION:
      return {...state, loading: action.loading }
    default:
      return state
  }
}

export const selectMessages = (state, props) => (
  state.conversation.data.filter(
    message => message.conversationId === props.match.params.username
  ) || []
)

export const selectLoading = state => state.conversation.loading

export const makeGetConversation = () => {
  return createSelector(
    [ selectMessages, selectLoading ],
    (data, loading) => ({ data, loading })
  )
}
