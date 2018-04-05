// The combineReducers is the other piece along with createStore you will use to
// implement Redux in your application. The combineReducers will combine all the
// reducers into one and then you'll pass it to createStore. It is not essencial
// to understand how combineReducers works, but you'll use it quite often, if
// you want to understand how it works check the following video:
// https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch

export const combineReducers = (reducers) => {
  return (state = {}, action) => {
    // for every reducer (don't confuse our "reducer" functions with the
    // array.reduce method we are using below) we combine the state that every
    // reducer returns
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        )
        return nextState
      },
      {}
    )
  }
}
