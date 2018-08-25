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

1. Create a logger middleware to log in the console every action that is dispatched

2. Create a thunk middleware. TODO Alex, how do we test it? shall we create a thunk for ThreadsContainer?

3. Refactor your logger and thunk middleware so you can use them along with { applyMiddleware } from 'redux' in the createStore function

4. Using thunks, add loading indicators to the fetchUser action creator in /actions/users.js

5. use reselect to implement a conversation selector

### Bonus


## Links

- [https://egghead.io/courses/building-react-applications-with-idiomatic-redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
