import { RECEIVE_THREADS } from '../actions/thread'

export default function (state = [], action) {
  switch (action.type) {
    case RECEIVE_THREADS:
      return action.threads
    default:
      return state
  }
}

export const selectThreads = state => state.threads
