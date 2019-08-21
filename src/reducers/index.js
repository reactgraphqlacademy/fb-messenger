import { combineReducers } from "redux";

import messages from "./messages";
import threads from "./threads";
import ui from "./ui";

export default combineReducers({
  messages,
  threads,
  ui
});
