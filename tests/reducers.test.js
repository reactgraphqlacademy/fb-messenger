import { threadReducer } from "../src/reducers";
import indexReducer from "../src/reducers";

describe("The threadReducer in src/reducers/index.js", () => {
  it("should return the current state if the switch doesn't match any case", () => {
    const currentState = { id: 1 };
    const state = threadReducer(currentState, { type: "test" });

    expect(state).toEqual(currentState);
  });

  it("should set the default state to null", () => {
    const state = threadReducer(undefined, { type: "test" });

    expect(state).not.toEqual(undefined);
    expect(state).toEqual(null);
  });

  it("should handle the action type called RECEIVE_THREAD and put action.thread in the state", () => {
    const thread = "dummy message";
    const state = threadReducer([], { type: "RECEIVE_THREAD", thread });

    expect(state).toEqual([thread]);
  });
});

describe("src/reducers/index.js", () => {
  it("should combine the thread reducer AND the ui reducer", () => {
    const received = indexReducer(undefined, { type: "@@redux/INIT" });

    expect(received).toEqual({
      thread: null,
      ui: { isMessageDetailOpen: true }
    });
  });
});
