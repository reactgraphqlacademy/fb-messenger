import { call, put } from 'redux-saga/effects'
import * as api from '../api/thread'

import { receiveThreads } from '../actions/thread'

export function* fetchThreads () {
  const { threads } = yield call(api.fetchThreads)
  yield put(receiveThreads(threads))
}
