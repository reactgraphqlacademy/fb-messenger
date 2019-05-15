import { receiveThread, RECEIVE_THREAD } from "./thread";

describe("Thread action", () => {
  it(`should return a ${RECEIVE_THREAD} action`, () => {
    const thread = { id: "1" };
    const expected = receiveThread(thread);

    expect(expected.thread).toEqual({ id: "1" });
    expect(expected.type).toEqual(RECEIVE_THREAD);
  });
});
