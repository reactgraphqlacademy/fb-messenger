import {
  receiveThread,
  RECEIVE_THREAD,
} from './thread'

describe('Thread action', () => {
  it(`should return an object with type ${RECEIVE_THREAD}`, () => {
    const thread = { id: "1" }

    expect(receiveThread(thread).type).toEqual(RECEIVE_THREAD)
  })

  it(`should return an object with a thread object`, () => {
    const thread = { id: "1" }

    expect(receiveThread(thread).thread).toEqual({ id: "1" })
  })
})
