import { takeEvery } from 'redux-saga/effects'

import { fetchThreads } from './thread'
import { FETCH_THREADS } from '../actions/thread'
import { fetchConversation } from './conversation'
import { FETCH_CONVERSATION } from '../actions/conversation'

export default function* rootSaga () {
  yield takeEvery(FETCH_THREADS, fetchThreads)
  yield takeEvery(FETCH_CONVERSATION, fetchConversation)
}
