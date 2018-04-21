import { combineReducers } from 'redux'

import ui from './ui'
import session from '../../User/reducers/session'

export default combineReducers({
    ui,
    session,
})
