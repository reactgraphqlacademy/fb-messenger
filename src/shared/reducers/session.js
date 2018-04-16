import { LOG_OUT } from '../actions/session'
import { getSession } from '../auth'

const session = (state = getSession(), action) => {
  switch (action.type) {
    case LOG_OUT:
      return null
    default:
      return state
  }
}

export default session
