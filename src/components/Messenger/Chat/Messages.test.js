import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import waitForExpect from "wait-for-expect";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait } from "@testing-library/react";

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

    // Questions:
    // - Is this black-box testing or white-box testing?
    // - If I remove Redux from my application and put all the state in React, do I need to update this test?
    // - What's your level of confidence that the user will be able to send a message?
  });

  it(`should send a message (integration test with Enzyme)`, async () => {
    // TODO define integration test
    // Questions:
    // - Is this black-box testing or white-box testing?
    // - If I remove Redux from my application and put all the state in React, do I need to update this test?
    //    HEADS UP! implement a Root component
    // - What's your level of confidence that the user will be able to send a message?
  });

  it(`should send a message (integration test with React Testing Library)`, async () => {
    // const api = {
    //   sendMessage: jest.fn(message => Promise.resolve(message))
    // };
    // const { queryAllByTestId, getByText, getByPlaceholderText } = render(
    //   <Root>
    //     <ComposedMessages api={api} username="alex_lobera" />
    //   </Root>
    // );
    // // ***************************************************
    // // HEADS UP! ADD data-testid={`message-${message.id}`}
    // // ***************************************************
    // expect(queryAllByTestId(/message-*./i).length).toBe(0);
    // fireEvent.change(getByPlaceholderText(/Type your message.../i), {
    //   target: { value: "Hi!" }
    // });
    // fireEvent.click(getByText(/Send/i));
    // // https://testing-library.com/docs/dom-testing-library/api-async#wait
    // await wait(() => {
    //   const messages = queryAllByTestId(/message-*./i);
    //   expect(messages.length).toBe(1);
    //   expect(messages[messages.length - 1]).toHaveTextContent("Hi!");
    // });
    // // Questions:
    // // - Is this black-box testing or white-box testing?
    // // - If I remove Redux from my application and put all the state in React, do I need to update this test?
    // // - What's your level of confidence that the user will be able to send a message?
  });
});

// const Root = ({ children }) => {
//   const store = configureStore();
//   return <Provider store={store}>{children}</Provider>;
// };
