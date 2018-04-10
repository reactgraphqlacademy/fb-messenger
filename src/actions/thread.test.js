import {
  receiveThread,
  RECEIVE_THREAD,
} from './thread'

describe('Thread action', () => {
  it(`should return an action of type ${RECEIVE_THREAD}`, () => {
    const thread = { id: "1" }
    const expected = { thread: { id: "1"}, type: RECEIVE_THREAD}

    expect(receiveThread(thread)).toEqual(expected)
  })
})
