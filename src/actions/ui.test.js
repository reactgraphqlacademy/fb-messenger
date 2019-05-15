import { toggleMessageDetail, TOGGLE_MESSAGE_DETAIL } from "./ui";

describe("Thread action", () => {
  it(`should return an action of type ${TOGGLE_MESSAGE_DETAIL}`, () => {
    expect(toggleMessageDetail()).toMatchSnapshot();
  });
});
