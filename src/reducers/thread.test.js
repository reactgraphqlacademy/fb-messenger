import { receiveThread, RECEIVE_THREAD } from "../actions/thread";

import threadReducer from "./threads";

/*

What BEHAVIOUR do we have to test?

Task 1, write the describe and its
Task 2, implement the expectations

*/

describe("Thread reducer", () => {
  it(`should return the default state if no state is provided`, () => {
    expect(threadReducer(undefined, {})).toEqual(null);
  });

  it(`should return a new state if it receives a ${RECEIVE_THREAD} action`, () => {
    const action = receiveThread({ id: "1" });
    const newState = { id: "1" };

    expect(threadReducer(null, action)).toEqual(newState);
  });

  it(`should return the current state if the action it receives it's not handled by the reducer`, () => {
    const state = {
      id: "1"
    };
    const action = { type: "SOMETHING_ELSE" };
    expect(threadReducer(state, action)).toEqual(state);
  });
});
