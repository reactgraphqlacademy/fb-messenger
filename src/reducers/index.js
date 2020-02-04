import { combineReducers } from "redux";
import {
  RECEIVE_THREAD,
  TOGGLE_MESSAGE_DETAIL,
  RECEIVE_MESSAGE
} from "../actions";

export function uiReducer(state = { isMessageDetailOpen: true }, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function threadReducer(state, action) {
  switch (action.type) {
  }
}

export default combineReducers({
  ui: uiReducer,
  thread: "?"
  // combineReducers can combine as many reducers as you need
});
