export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'

export const receiveConversations = (conversations) => ({
    type: RECEIVE_CONVERSATIONS,
    conversations
})

export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
})
