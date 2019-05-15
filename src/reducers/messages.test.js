import { receiveMessages, RECEIVE_CONVERSATION } from "../actions/messages";

import messagesReducer from "./messages";

/*

What BEHAVIOUR do we have to test?

Task 1, write the describe and its
Task 2, implement the expectations

*/
describe("Messages reducer", () => {
  it(`should return the default state if no state is provided`, () => {});

  it(`should return a new state if it receives a ${RECEIVE_CONVERSATION} action`, () => {});

  it(`should return the current state if the action it receives it's not handled by the reducer`, () => {});
});
