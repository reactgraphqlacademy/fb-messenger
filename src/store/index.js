import { createStore } from "redux";
// import { createStore } from "../redux/createStore";
import reducers from "../reducers";

export const configureStore = initialState => {
  return createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
