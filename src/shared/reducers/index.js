import { combineReducers } from 'redux'

import conversation from './conversation'
import thread from './thread'
import ui from './ui'
import session from './session'

export default combineReducers({
  conversation,
  thread,
  ui,
  session,
})
