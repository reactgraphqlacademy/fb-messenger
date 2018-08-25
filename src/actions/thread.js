import { fetchFirstThread } from '../api/thread'

export const RECEIVE_THREAD = 'RECEIVE_THREAD'
export const FETCH_THREAD = 'FETCH_THREAD'

export const receiveThread = (thread) => ({
    type: RECEIVE_THREAD,
    thread
})

export const fetchThread = () => async (dispatch) => {
  const thread = await fetchFirstThread()
  dispatch(receiveThread(thread))
}
