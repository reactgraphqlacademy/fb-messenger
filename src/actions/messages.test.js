import {
  receiveMessages,
  receiveMessage,
  RECEIVE_MESSAGE,
  RECEIVE_CONVERSATION
} from "./messages";

describe("Messages action", () => {
  it(`should return an action of type ${RECEIVE_MESSAGE}`, () => {
    const expected = {
      message: {
        message: "hi there!",
        to: "randomuser"
      },
      type: RECEIVE_MESSAGE
    };

    const actual = receiveMessage({
      message: "hi there!",
      to: "randomuser"
    });

    expect(actual).toEqual(expected);
  });

  it(`should return an action of type ${RECEIVE_CONVERSATION}`, () => {
    const expected = {
      messages: [
        {
          message: "hi there!",
          to: "randomuser",
          time: "2018-02-10T11:33:00Z",
          id: "randomid"
        }
      ],
      type: RECEIVE_CONVERSATION
    };

    const actual = receiveMessages([
      {
        message: "hi there!",
        to: "randomuser",
        time: "2018-02-10T11:33:00Z",
        id: "randomid"
      }
    ]);

    expect(actual).toEqual(expected);
  });
});
