import * as api from '../api/message'

export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const LOADING_CONVERSATION = 'LOADING_CONVERSATION'

export const receiveConversation = conversation => ({
    type: RECEIVE_CONVERSATION,
    conversation,
})

export const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
})

export const loadingConversation = loading => ({
    type: LOADING_CONVERSATION,
    loading
})

export const fetchConversation = username => async (dispatch, getState) => {
  const { conversation } = getState()
  try {
    if(conversation.loading) {
      return
    }
    dispatch(loadingConversation(true))
    const nextConversation = await api.fetchConversation(username)
    dispatch(receiveConversation(nextConversation))
    dispatch(loadingConversation(false))
  } catch (error) {
    dispatch(loadingConversation(false))
  }
}
