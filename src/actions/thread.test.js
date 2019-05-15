import { receiveThread, RECEIVE_THREAD } from "./thread";

describe("Thread action", () => {
  it(`should return a ${RECEIVE_THREAD} action`, () => {
    const thread = { id: "1" };

    expect(receiveThread(thread)).toMatchSnapshot();
  });
});
