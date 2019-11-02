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

4. Once the import from your own implementation of Redux has been replaced by the one in npm, you should run `npm start` and the web site should still work. Now that you could implement Redux yourself (you must be a Redux master!), let's use it in our project :D

### Part 2, moving the state of the app into Redux

1. The `<UserDetail>` component should not be open by default. The src/components/Messenger/Chat/Chat.js is connected to Redux and it gets the prop isMessageDetailOpen from the store. Which part of the code is creating the initial state of isMessageDetailOpen? Hint, look at the uiReducer in src/reducers/index.js and change the default state.

2. Refactor uiReducer in src/reducers/index.js so when the `TOGGLE_MESSAGE_DETAIL` action is dispatched then the `UserDetail` in the chat is opened or closed. Hint, the `TOGGLE_MESSAGE_DETAIL` action is already dispatched in src/components/Messenger/Chat/ChatBar, so the only thing you need to do is to include another switch case in the uiReducer in src/reducers/index.js

3. Move the state from `src/components/Messenger/Chat/ChatContainer.js` to Redux. Before doing that have a look at how `connect` is implemented in `src/components/Messenger/ThreadsContainer.js`, please read the comments at the bottom of the file. After reading ThreadsContainer, you are ready to work on ChatContainer. You will have to:

- Create an action creator to "receive messages" in src/actions/index.js. Hint, it'll be very similar to the `receiveThread`
- Create a reducer in src/reducers/index.js called messagesReducer. Add the messagesReducer to the `combineReducers` function as another parameter like ui and thread.
- The `fetchMessages` method in `ChatContainer` should dispatch "receive messages" when the api.fetchMessages resolves instead of doing `this.setState({ messages })`
- "connect" the `ChatContainer` to Redux and "map state to props", so that `ChatContainer` gets a prop named messages with the messages from the state.

4. Users should be able to send a message:

- The `sendMessage` method in src/components/Messenger/Chat/
  Messages.js dispatches a "receive message" action when a user clicks on the "send" button. Refactor the src/reducers/index.js messagesReducer so that when a "receive message" action is dispatched the message is added at the end of the messages. Hint, the only file you need to change is in src/reducers/index.js.
- When a new message is sent, the Threads component should display the last message sent. Hint, the only file you need to change is in src/reducers/index.js.

### Bonus

Add Redux to [your recap app](https://github.com/reactgraphqlacademy/recap). Your goal is to learn how to set the Provider in the app (it was already configured in the fb-messenger exercise), and consolidate what you've learned in Redux by moving the list of photos or characters to Redux. To do that you'll need to:
- Create your root reducer. Hint, you'll need to add the combineReducers function here
- Create the store. We recommend to do it in a separate file called configureStore.js. Have a look at how it's done in the fb-messenger Redux exercise branch.
- Set the Provider at the root component
- Move the state from the component that owns the list of photos or characters to Redux

## Links

- [Introduction to Redux — Redux explained with very simple examples](https://reactjs.academy/blog/introduction-to-redux-explained-with-simple-examples/)
- [https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)
- [https://egghead.io/courses/building-react-applications-with-idiomatic-redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
