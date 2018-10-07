# ReactJS Facebook messenger

The goal of this exercise is to learn how to use Redux in a React app.

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md


### Step 2
```sh
 git checkout redux
 ```
 
### Step 3
```sh
 npm i
 ```
 
## Exercise

### Part 1, building your own Redux

In order to make it easier to understand Redux we have created a simplified version of `redux`. We have some bugs in our simplified version of `redux` that you should fix. The unit tests will help you fix the app and learn by "fixing".

The idea is simple, you should execute our unit tests and fix the errors. Once all the code passes the unit tests, you can start the app and it should work (you need to fix the tests first!).

1. execute `npm test`

2. Once all the tests pass execute `npm start`

3. Once all the tests pass and you have seen the site working on the browser, replace our simplified version of `redux` with https://www.npmjs.com/package/redux (already installed in this project) now that you've understood how it works. You will need to uncomment `import { createStore } from 'redux'` and comment `import { createStore } from '../redux/createStore'` in the following file `src/store/index.js`

4. Once the import from your own implementation of Redux have been replaced by the one in npm, you should run `npm start` and the web site should still work. Now that you could implement Redux yourself (you must be a Redux master!), let's use it in our project :D

### Part 2, moving the state of the app into Redux


1. The ```<UserDetail>``` component should not be open by default. The src/components/Messenger/Conversation/Content/index.js is connected to Redux and it gets the prop isMessageDetailOpen from the store. Which part of the code is creating the initial state of isMessageDetailOpen? Hint, look at src/reducers/ui.js and change the default state.

2. Refactor src/reducers/ui.js so when the ```TOGGLE_MESSAGE_DETAIL``` action is dispatched then the ```UserDetail``` in the conversation is opened or closed. Hint, the ```TOGGLE_MESSAGE_DETAIL``` action is already dispatched in src/components/Messenger/Conversation/ConversationBar, so the only thing you need to do is to include another switch case in src/reducers/ui.js  

3. Move the state from ```ConversationContainer``` to Redux. You will have to:
  - Create an action creator to "receive conversation" in src/actions/conversation.js. Hint, it'll be like the ```receiveThread``` in src/actions/thread.js
  - Create a reducer in src/reducers. Use the file src/reducers/conversation.js
  - Import the conversation.js reducer in src/reducers/index.js and add it to the ```combineReducers``` function as a parameter.
  - The ```fetchConversation``` method in ```ConversationContainer``` should dispatch "receive conversation" when the api.fetchConversation resolves instead of doing ```this.setState({ conversation })```
  - "connect" the ```ConversationContainer``` to Redux and "map state to props", so that ```ConversationContainer``` gets a prop named conversation with the conversation from the state.

4. Users should be able to send a message:
  - The ```sendMessage``` method in src/components/Messenger/Conversation/Content/Messages.js dispatches a "receive message" action when a user clicks on the "send" button. Refactor the src/reducers/conversation.js so that when a "receive message" action is dispatched the message is added at the end of the conversation. Hint, the only file you need to change is in src/reducers.
  - When a new message is sent, the Threads component should display the last message sent. Hint, the only file you need to change is in src/reducers.

### Bonus

Checkout this branch  [https://github.com/leanjscom/fb-messenger/tree/styling-in-react-leanjs](https://github.com/leanjscom/fb-messenger/tree/styling-in-react-leanjs), ```npm install --save redux react-redux```, and move the state of the User Detail open/ close from the url into Redux. You will need to set Redux, which involves creating the store in Redux using the createStore function, adding the Provider component in the Root component, etc

## Links

- [Introduction to Redux — Redux explained with very simple examples](https://medium.com/leanjs/introduction-to-redux-redux-explained-with-very-simple-examples-b39d7967ceb8)
- [https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)
- [https://egghead.io/courses/building-react-applications-with-idiomatic-redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
