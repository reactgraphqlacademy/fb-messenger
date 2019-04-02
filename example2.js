

/**********************************
 In file 1: e.g. reducers/index.js
 **********************************/

import { combineReducers } from 'redux'

// These files all export a single reducer
import changeStateInResponseToNewMessage from './example1'
import someOtherReducer from './someOtherFile'

// The following section sets up the redux state to look like:
/*

    {
      messenger: (Output of changeStateInResponseToNewMessage),
      shoppingBasket: (Output of someOtherReducer)
    }

*/
const rootReducer = combineReducers({
  messenger: changeStateInResponseToNewMessage,
  shoppingBasket: someOtherReducer,
})

export default rootReducer


/******************************
 In file 2: e.g. index.js
 ******************************/

import rootReducer from './reducers/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

// Set up the store with the root reducer
const store = createStore(rootReducer);

// Wrap the app in <Provider> that makes redux available to the app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)