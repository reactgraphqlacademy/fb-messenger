import {
  toggleMessageDetail,
} from '../actions/ui'

import ui from './ui'

/*

What BEHAVIOUR do we have to test?

Task 1, write the describe and its
Task 2, implement the expectations

*/
describe('UI reducer', () => {
  it(`should return the default state if no state is provided`, () => {
    const actualUiReducer = ui(undefined, toggleMessageDetail())

    expect(actualUiReducer).toEqual({ isMessageDetailOpen: true })
  })

  it(`should return a new state if it receives a receiveConversation action`, () => {

  })

  it(`should return the current state if the action it receives it's not handled by the reducer`, () => {

  })
})
