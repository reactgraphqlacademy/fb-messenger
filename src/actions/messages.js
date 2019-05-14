export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const receiveMessages = messages => ({
  type: RECEIVE_CONVERSATION,
  messages
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});
