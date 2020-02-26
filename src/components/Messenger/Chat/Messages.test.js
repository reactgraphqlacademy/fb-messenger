import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import waitForExpect from "wait-for-expect";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import { render, fireEvent, wait } from "@testing-library/react";

import { configureStore } from "../../../store";
import ComposedMessages, { Messages, MessageBox, Message } from "./Messages";

// TODO move this file to some /test/utils.js
const Root = ({ children }) => {
  const store = configureStore();
  return (
    <Router>
      <Provider store={store}>{children}</Provider>
    </Router>
  );
};

describe("<Messages />", () => {
  it(`should send a message (unit test)`, async () => {
    const receiveMessage = jest.fn();
    // In this case you could also return `const api = {sendMessage: jest.fn()}`,
    // but in the test below (integration test) that approach does not work and you need to return a promise.
    // For simplicity we have used the same api implementation in both examples
    const api = {
      sendMessage: jest.fn(message => Promise.resolve(message))
    };
    const wrapper = shallow(
      <Messages receiveMessage={receiveMessage} api={api} username="Alex" />
    );

    wrapper.find(MessageBox).simulate("change", { target: { value: "hi!" } });

    // Heads up! the following "await" works in this case because the code that handles the click returns a Promise.resolve,
    // it won't work if the code returns a pending promise waiting to be resolved or rejected.
    // Events don't return anything. Therefore the promise returned from sendMessage is not passed to this code.
    // It's better to use https://www.npmjs.com/package/wait-for-expect. Check the next test to see how to use it

    wrapper.find("button").simulate("click");

    await waitForExpect(() => {
      expect(receiveMessage).toHaveBeenCalledWith({
        message: "hi!",
        to: "Alex"
      });
    });
  });

  it(`should send a message (integration test)`, async () => {
    const api = {
      sendMessage: jest.fn(message => Promise.resolve(message))
    };
    const wrapper = mount(
      <Root>
        <ComposedMessages api={api} username="Alex" />
      </Root>
    );

    expect(wrapper.find(Message).length).toBe(0);

    wrapper
      .find("input")
      .simulate("change", { target: { value: "hi there!" } });
    wrapper.find("button").simulate("click");

    await waitForExpect(() => {
      wrapper.update();
      expect(wrapper.find(Message).length).toBe(1);
      expect(wrapper.find(Message).text()).toBe("hi there!");
    });
  });

  it(`should send a message (integration test with React Testing Library)`, async () => {
    const randomMessage = Math.random().toString();
    const api = {
      sendMessage: jest.fn(message => Promise.resolve(message))
    };
    const { getByText, getByPlaceholderText } = render(
      <Root>
        <ComposedMessages api={api} username="alex_lobera" />
      </Root>
    );

    // 2. It expects to have zero messages in the chat
    // Hint: You might need to add something to the Message component to facilitate this
    expect(getByText(/You have no messages/i)).toBeTruthy();

    // 3. Fire an on change event on the input message with a random text
    // Hint: You might want to use the placeholder to find the input
    fireEvent.change(getByPlaceholderText(/Type your message.../i), {
      target: { value: randomMessage }
    });

    fireEvent.click(getByText(/Send/i));

    // https://testing-library.com/docs/dom-testing-library/api-async#wait
    await wait(() => {
      expect(getByText(randomMessage)).toBeTruthy();
    });
  });

  it(`should send a message (integration test without any testing library)`, async () => {
    const randomMessage = Math.random().toString();
    const div = document.createElement("div");
    document.body.appendChild(div);

    const api = {
      sendMessage: jest.fn(message => Promise.resolve(message))
    };

    ReactDOM.render(
      <Root>
        <ComposedMessages api={api} username="alex_lobera" />
      </Root>,
      div
    );

    const input = document.body.querySelector("input");

    setNativeValue(input, randomMessage);

    input.dispatchEvent(new Event("input", { bubbles: true }));

    await act(async () => {
      document.body.querySelector("button").click();
    });

    await waitForExpect(() => {
      expect(document.body.textContent).toContain(randomMessage);
    });

    // clean up
    ReactDOM.unmountComponentAtNode(div);
  });
});

// https://github.com/facebook/react/issues/10135#issuecomment-401496776
function setNativeValue(element, value) {
  const { set: valueSetter } =
    Object.getOwnPropertyDescriptor(element, "value") || {};
  const prototype = Object.getPrototypeOf(element);
  const { set: prototypeValueSetter } =
    Object.getOwnPropertyDescriptor(prototype, "value") || {};
  if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } /* istanbul ignore next (I don't want to bother) */ else if (valueSetter) {
    valueSetter.call(element, value);
  } else {
    throw new Error("The given element does not have a value setter");
  }
}
