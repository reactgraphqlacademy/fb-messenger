import { combineReducers } from "redux";

import messages from "./messages";
import thread from "./thread";
import ui from "./ui";

export default combineReducers({
  messages,
  thread,
  ui
});
