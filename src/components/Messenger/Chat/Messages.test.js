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

const Root = ({ children }) => {
  const store = configureStore();
  return <Provider store={store}>{children}</Provider>;
};

describe("<Messages />", () => {
  it(`should send a message (unit test)`, async () => {
    // TODO define unit
    const receiveMessage = jest.fn();
    const fakeApi = {
      sendMessage: jest.fn(message => Promise.resolve(message))
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
    // - What's your level of confidence that the user will be able to send a message?
  });

  it(`should send a message (React Testing Library)`, async () => {
    const randomMessage = Math.random().toString();
    const api = {
      sendMessage: jest.fn(message => Promise.resolve(message))
    };

    const store = configureStore();
    const { queryAllByText, getByText, getByPlaceholderText } = render(
      <ComposedMessages store={store} api={api} username="alex_lobera" />
    );

    expect(queryAllByText(randomMessage).length).toBe(0);

    fireEvent.change(getByPlaceholderText(/Type your message.../i), {
      target: { value: randomMessage }
    });

    fireEvent.click(getByText(/Send/i));

    await wait(() => {
      expect(getByText(randomMessage));
      expect(queryAllByText(randomMessage).length).toBe(1);
    });
    // Questions:
    // - Is this test very different from the previous one?
    // - If I remove Redux from my application and put all the state in React, do I need to update this test?
  });

  /*


   *****************************************************************


   */
  //   it(`should send a message (integration test with Enzyme V1)`, async () => {
  //     const randomMessage = Math.random().toString();
  //     const api = {
  //       sendMessage: jest.fn(message => Promise.resolve(message))
  //     };
  //     const store = configureStore();
  //     const wrapper = mount(
  //       <ComposedMessages store={store} api={api} username="Alex" />
  //     );

  //     await act(async () => {
  //       wrapper
  //         .find("input")
  //         .simulate("change", { target: { value: randomMessage } });
  //     });
  //     await act(async () => {
  //       wrapper.find("button").simulate("click");
  //     });

  //     await waitForExpect(() => {
  //       wrapper.update();
  //       expect(wrapper.find(Message).text()).toBe(randomMessage);
  //     });

  // //   Questions:
  // //     - Is this test very different from the previous one?
  // //     - If I remove Redux from my application and put all the state in React, do I need to update this test?
  //   });

  /*


   *****************************************************************


   */
  //   it(`should send a message (React Testing Library V2)`, async () => {
  //     const randomMessage = Math.random().toString();
  //     const api = {
  //       sendMessage: jest.fn(message => Promise.resolve(message))
  //     };

  //     const { queryAllByText, getByText, getByPlaceholderText } = render(
  //       <Root>
  //         <ComposedMessages api={api} username="alex_lobera" />
  //       </Root>
  //     );

  //     expect(queryAllByText(randomMessage).length).toBe(0);

  //     fireEvent.change(getByPlaceholderText(/Type your message.../i), {
  //       target: { value: randomMessage }
  //     });

  //     fireEvent.click(getByText(/Send/i));

  //     await wait(() => {
  //       expect(getByText(randomMessage));
  //       expect(queryAllByText(randomMessage).length).toBe(1);
  //     });
  //     // Questions:
  //     // - Is this test very different from the previous one?
  //     // - If I remove Redux from my application and put all the state in React, do I need to update this test?
  //   });
});
