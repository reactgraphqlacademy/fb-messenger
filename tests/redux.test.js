import sinon from "sinon";
import { createStore } from "../src/redux/createStore";
import reducers from "../src/reducers";

describe("My simplified src/redux/createStore.js", () => {
  it("should return an object (the store) with a method called getState", () => {
    const store = createStore(reducers);

    expect(typeof store.getState).toBe("function");
  });

  it("should return an object (the store) with a method called dispatch", () => {
    const store = createStore(reducers);

    expect(typeof store.dispatch).toBe("function");
  });

  it("should return an object (the store) with a method called subscribe", () => {
    const store = createStore(reducers);

    expect(typeof store.subscribe).toBe("function");
  });

  it("the getState method should return a JSON object that represents the current state of the app", () => {
    const testReducer = (state = { hello: "redux" }, action) => state;
    const store = createStore(testReducer);
    const state = store.getState();

    expect(state.hello).toBe("redux");
  });

  it("the dispatch method should receive an action as a parameter and pass it on the reducer", () => {
    const store = createStore(reducers);
    const myAction = { type: "test" };
    sinon.spy(store, "dispatch");

    store.dispatch(myAction);

    sinon.assert.calledWith(store.dispatch, myAction);
  });
});
