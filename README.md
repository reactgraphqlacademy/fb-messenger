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

2. Refactor the reducer src/reducers/conversation.js so it handles the receiveMessage action from src/actions/conversation.js. The src/components/Messenger/Conversation/Messages.js component is already connected to Redux, so clicking on the "send" button should display the message in the conversation once the conversation.js reducer is refactored.

### Bonus

1. Delete a message

2. Checkout this branch  [https://github.com/leanjscom/fb-messenger/tree/styling-in-react-leanjs](https://github.com/leanjscom/fb-messenger/tree/styling-in-react-leanjs), npm install --save redux react-redux, and move the state of the conversation into Redux.

## Links

- [https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)
-[https://egghead.io/courses/building-react-applications-with-idiomatic-redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
