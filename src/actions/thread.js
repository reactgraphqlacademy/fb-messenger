import * as api from '../api/thread'

export const RECEIVE_THREADS = 'RECEIVE_THREADS'
export const FETCH_THREAD = 'FETCH_THREAD'

export const receiveThreads = threads => ({
    type: RECEIVE_THREADS,
    threads
})

export const fetchThreads = () => async (dispatch) => {
  const { threads } = await api.fetchThreads()
  dispatch(receiveThreads(threads))
}
