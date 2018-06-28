export const RECEIVE_THREAD = 'RECEIVE_THREAD'

export const receiveThread = (thread) => (
  {
    type: RECEIVE_THREAD,
    payload: thread
  }
)
