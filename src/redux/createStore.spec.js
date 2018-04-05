import { createStore } from './createStore'
import { expect } from 'chai'
import sinon from 'sinon'

import reducers from '../reducers'

describe("My simplified src/redux/createStore.js", () => {
  it("should return an object (the store) with a method called getState", () => {
    const store = createStore(reducers)

    // assertions:
    expect(store.getState).to.be.a('function')
  })

  it("should return an object (the store) with a method called dispatch", () => {
    const store = createStore(reducers)

    // assertions:
    expect(store.dispatch).to.be.a('function')
  })

  it("should return an object (the store) with a method called subscribe", () => {
    const store = createStore(reducers)

    // assertions:
    expect(store.subscribe).to.be.a('function')
  })

  it("the getState method should return a JSON object that represents the current state of the app", () => {
    const testReducer = (state = { hello: 'redux'}, action) => state
    const store = createStore(testReducer)
    const state = store.getState()

    // assertions:
    expect(state.hello).to.be.equal('redux')
  })

  it("the dispatch method should receive an actions as a parameter", () => {
    const store = createStore(reducers)
    const myAction = { type: 'test' }

    // test double
    sinon.spy(store, 'dispatch')

    // assertions:
    store.dispatch(myAction)

    sinon.assert.calledWith(store.dispatch, myAction)
  })
})
