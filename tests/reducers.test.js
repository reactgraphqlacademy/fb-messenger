import { threadReducer } from "../src/reducers";
import indexReducer from "../src/reducers";

describe("The threadReducer in src/reducers/index.js", () => {
  it("should return the current state if the switch doesn't match any case", () => {
    const state = threadReducer({ id: 1 }, { type: "test" });

    expect(state).toEqual({ id: 1 });
  });

  it("should set the default state to null", () => {
    const state = threadReducer(undefined, { type: "test" });

    expect(state).not.toEqual(undefined);
    expect(Object.prototype.toString.call(state)).toEqual("[object Null]");
  });

  it("should handle the action type called RECEIVE_THREAD and put action.thread in the state", () => {
    const state = threadReducer([], { type: "RECEIVE_THREAD", thread: [2, 3] });

    expect(state).toEqual([2, 3]);
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
