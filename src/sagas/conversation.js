import { call, put, select } from 'redux-saga/effects'
import * as api from '../api/message'
import { selectLoading } from '../reducers/conversation'
import {
  loadingConversation, receiveConversation
} from '../actions/conversation'

export function* fetchConversation (action) {
  const { username } = action
  const loading = yield select(selectLoading)
  if (loading) {
    return
  }

  try {
    yield put(loadingConversation(true))
    const messages = yield call(api.fetchConversation, username)
    yield put(receiveConversation(messages))
  } catch (error) {
    // do something, eg. notify the user
  } finally {
    yield put(loadingConversation(false))
  }
}
