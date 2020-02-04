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

### Part 1. Practice reducers with TDD

Run the following command and try to make the test pass by fixing the code:

```sh
 npm run test-reducers
```

The idea is simple, you should execute our unit tests and fix the errors. Once all the code passes the unit tests, you can start the app and it should start (you need to fix the tests first!).

### Part 2. Move the state of the app into Redux

1. The `<UserDetail>` component should not be open by default. The src/components/Messenger/Chat/Chat.js is connected to Redux and it gets the prop isMessageDetailOpen from the store. Which part of the code is creating the initial state of isMessageDetailOpen? Hint, look at the uiReducer in src/reducers/index.js and change the default state.

2. Refactor uiReducer in src/reducers/index.js so when the `TOGGLE_MESSAGE_DETAIL` action is dispatched then the `UserDetail` in the chat is opened or closed. Hint, the `TOGGLE_MESSAGE_DETAIL` action is already dispatched in src/components/Messenger/Chat/ChatBar, so the only thing you need to do is to include another switch case in the uiReducer in src/reducers/index.js

3. Move the state from `src/components/Messenger/Chat/ChatContainer.js` to Redux. Before doing that have a look at how `connect` is implemented in `src/components/Messenger/ThreadsContainer.js`, please read the comments at the bottom of the file. After reading ThreadsContainer, you are ready to work on ChatContainer. You will have to:

- Create an action creator to "receive messages" in src/actions/index.js. Hint, it'll be very similar to the `receiveThread`
- Create a reducer in src/reducers/index.js called messagesReducer. Add the messagesReducer to the `combineReducers` function as another parameter like ui and thread.
- The `fetchMessages` method in `ChatContainer` should dispatch "receive messages" when the api.fetchMessages resolves instead of doing `setMessages`
- Use useSelector in `ChatContainer` to get the messages from the Redux store. Tidy up your code after, meaning remove any unnecessary code.

4. When a user sends a message:

- A) The new message should be displayed on the Chat. The `sendMessage` method in src/components/Messenger/Chat/
  Messages.js dispatches a "receive message" action when a user clicks on the "send" button. Refactor the src/reducers/index.js messagesReducer so that when a "receive message" action is dispatched the message is added at the end of the messages. Hint, the only file you need to change is in src/reducers/index.js.
- B) When a new message is sent, the Threads component should display the last message sent. Hint, the only file you need to change is in src/reducers/index.js.

### Part 3. Build your own Redux

In order to make it easier to understand Redux we have created a simplified version of `redux`. We have some bugs in our simplified version of `redux` that you should fix. The unit tests will help you fix the app and learn by "fixing".

1. execute `npm run test-redux`

2. Once all the tests pass execute `npm start`

3. Once all the tests pass and you have seen the site working on the browser, replace the npm version of `redux` (https://www.npmjs.com/package/redux) with yours. To do that, you will need to comment out this line `import { createStore } from 'redux'` and uncomment `import { createStore } from '../redux/createStore'` in the following file `src/store/index.js`

4. Once the import from your own implementation of Redux has replaced the one from npm, you should run `npm start` again, and the web site should still work. Now that you have fixed my mini Redux, you must be a Redux master! 🙂

### Bonus

Move the React state of the [**bookstore**](https://github.com/reactgraphqlacademy/thinking-in-react/tree/hooks) exercise to Redux.

Heads up! You'll need to set up the `react-redux` Provider component at the root of your component tree and pass the `store` to it. We already set the [Provider](https://github.com/reactgraphqlacademy/fb-messenger/blob/redux/src/components/Root.js#L9) in this Facebook Messenger app so you'll need to check the [docs](https://react-redux.js.org/api/provider) to see how to do it yourself. Ask the coach if you have questions after giving a try 🙂

## Links

- [Introduction to Redux — Redux explained with very simple examples](https://reactjs.academy/blog/introduction-to-redux-explained-with-simple-examples/)
- [https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)
- [https://egghead.io/courses/building-react-applications-with-idiomatic-redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
