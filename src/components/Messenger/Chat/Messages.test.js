import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import waitForExpect from "wait-for-expect";

import { configureStore } from "../../../store";
import ComposedMessages, { Messages, InputMessage, Message } from "./Messages";

describe("<Messages />", () => {
  it(`should send a message (unit test)`, async () => {
    // TODO define unit
    const receiveMessage = jest.fn();
    const fakeApi = {
      sendMessage: jest.fn(message => message)
    };
    const wrapper = shallow(
      <Messages
        username="alex_lobera"
        receiveMessage={receiveMessage}
        api={fakeApi}
      />
    );

    wrapper
      .find(InputMessage)
      .simulate("change", { target: { value: "hi there!" } });

    wrapper.find("button").simulate("click");

    await waitForExpect(() => {
      expect(fakeApi.sendMessage).toHaveBeenCalledWith({
        message: "hi there!",
        to: "alex_lobera"
      });

      expect(receiveMessage).toHaveBeenCalledWith({
        message: "hi there!",
        to: "alex_lobera"
      });
    });

    // Final questions:
    // - Is this black-box testing or white-box testing?
    // - If I remove Redux from my application and put all the state in React, do I need to update this test?
    // - What's your level of confidence that the user will be able to send a message?
  });

  it(`should send a message (integration test with Enzyme)`, async () => {
    // TODO define integration test
    // Final questions:
    // - Is this black-box testing or white-box testing?
    // - If I remove Redux from my application and put all the state in React, do I need to update this test?
    // - What's your level of confidence that the user will be able to send a message?
  });

  it(`should send a message (integration test with React Testing Library)`, async () => {
    // Final questions:
    // - Is this black-box testing or white-box testing?
    // - If I remove Redux from my application and put all the state in React, do I need to update this test?
    // - What's your level of confidence that the user will be able to send a message?
  });
});
