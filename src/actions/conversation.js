export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'

export const receiveConversation = (conversation) => ({
    type: RECEIVE_CONVERSATION,
    conversation,
})

export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
})
