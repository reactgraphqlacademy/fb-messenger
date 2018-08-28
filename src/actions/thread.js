export const RECEIVE_THREADS = 'RECEIVE_THREADS'
export const FETCH_THREADS = 'FETCH_THREADS'

export const receiveThreads = threads => ({
    type: RECEIVE_THREADS,
    threads
})

export const fetchThreads = () => ({
  type: FETCH_THREADS,
})
