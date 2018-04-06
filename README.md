# ReactJS Facebook messenger

The goal of this exercise is to learn how to style a React app using styled-components.

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md


### Step 2
```sh
 git checkout styling-in-react
 ```

## Exercise

### Part 1, building your own Redux

We have written some unit tests for the relevant code. Each unit test sits side by side with the code it's testing. Example src/actions/index.js unit tests are in src/actions/index.spec.js

The idea is simple, you should execute our unit tests and fix the errors. Once all the code passes the unit tests, you are able to start the app by doing `npm start`.

In order to make it easier to understand Redux we have created a simplified version of `redux` and `react-redux`. We have some bugs in our simplified version of `redux`and `react-redux` that you should fix. The unit tests will help you fix the app and learn by "fixing".

- execute `npm test`

### Part 2, moving the state of the app into Redux

1. Replace our simplified version of `redux` and `react-redux` with https://github.com/reactjs/redux and https://github.com/reactjs/react-redux now that you've understood how it works. The official ones have cooler features that you should use ;)

2. The <UserDetail> component should not be open by default. The src/components/Messenger/Conversation/Content/index.js is connected to Redux and it gets the prop isMessageDetailOpen from the store. Which part of the code is creating the initial state of isMessageDetailOpen? Hint, look at src/reducers/ui.js and change the default state.

3. Refactor src/reducers/ui.js so when the TOGGLE_MESSAGE_DETAIL action is dispatched it opens and closes the user detail in the conversation. Hint, the TOGGLE_MESSAGE_DETAIL action is already dispatched in src/components/Messenger/Conversation/ConversationBar, so the only thing you need to do is include another switch case in src/reducers/ui.js  

4. Move the state from ConversationContainer to Redux. You will have to:
- Create an action creator to "receive conversation" in src/actions/conversation.js. Hint, it'll be like the receiveThread in src/actions/thread.js
- Create a reducer in src/reducers. I suggest you call the file conversation.js
- Import the conversation.js reducer in src/reducers/index.js and add it to the combineReducers function.
- "connect" the ConversationContainer to Redux and "map state to props", so that ConversationContainer gets a prop called conversation with the conversation from the state.

5. Users should be able to send a message:
- The sendMessage method in src/components/Messenger/Conversation/Content/Messages.js dispatches a "receive message" action when a user clicks on the "send" button. Refactor the src/reducers/conversation.js so that when a "receive message" action is dispatched the message is added at the end of the conversation. Hint, the only file you need to change is src/reducers/conversation.js
- When a new message is sent, the Threads component should display the last message sent.

### Bonus

Checkout this branch  [https://github.com/leanjscom/fb-messenger/tree/styling-in-react-leanjs](https://github.com/leanjscom/fb-messenger/tree/styling-in-react-leanjs), npm install --save redux react-redux, and move the state of the Use rDetail open/ close from the url into Redux.

## Links

- [https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)
-[https://egghead.io/courses/building-react-applications-with-idiomatic-redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
