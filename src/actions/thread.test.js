import {
  receiveThread,
  RECEIVE_THREAD,
} from './thread'

describe('Thread action', () => {
<<<<<<< Updated upstream
  it(``, () => {
||||||| merged common ancestors
  it(`should return an action of type ${RECEIVE_THREAD}`, () => {
    const thread = { id: "1" }
    const expected = { thread: { id: "1"}, type: RECEIVE_THREAD}
=======
  it(`should return an action of type ${RECEIVE_THREAD}`, () => {
    const thread = { id: "1" }
    const expected = { payload: { id: "1"}, type: RECEIVE_THREAD}
>>>>>>> Stashed changes

  })
})
