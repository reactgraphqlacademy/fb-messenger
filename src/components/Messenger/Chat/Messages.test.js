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
import ComposedMessages, { Messages, InputMessage, Message } from "./Messages";

const Root = ({ children }) => {
  const store = configureStore();
  return <Provider store={store}>{children}</Provider>;
};

describe("<Messages />", () => {
  it(`should send a message (unit test)`, async () => {
    // 1. shallow the <Messages /> component
    // You can use console.log(wrapper.debug()) to console.log the component that you are testing
    // 2  Mock the api. Hint, the api functions are passed as a default prop (api = apiImplementation),
    // you can override that prop by doing <Messages api={my_mocked_api_object} />
    // 3. Add some text to the input. Hint:
    //      const randomMessage = Math.random().toString();
    //      wrapper.find(InputMessage).simulate("change", { target: { value: randomMessage } });
    //          Can we use wrapper.find('input') instead?
    // 4. Find the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering
    // 5. Click on the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering
    // 6. Assert the 'message was sent' ->
    //      You can use toHaveBeenCalled on the my_mocked_api_object you passed.
    //      toHaveBeenCalled needs a mock function https://jestjs.io/docs/en/mock-functions, is your sendMessage a mock?
    //      You have an example here http://airbnb.io/enzyme/#shallow-rendering
    //      heads-up! Enzyme expectations are not camel case, Jest expectations are camel case (for when you copy&paste :)
    //      If you remove receiveMessage from Messages.js line 76, does your test pass? how can you improve that?
    // Final questions:
    // - Is this black-box testing or white-box testing?
    // - Do you have high confidence or low confidence you can deploy this code on a Friday?
    // - If I remove Redux from my application and put all the state in React, do I need to update this test?
    // - What's your level of confidence that the user will be able to send a message?
  });

  it(`should send a message (integration test with Enzyme)`, async () => {
    // 1. shallow or mount the <Messages /> component ?
    //    A) which component, Messages or ComposedMessages?
    //    B) If you mount the component then all the children are rendered. Hint: you need to provide a store.
    // 2  Mock the api. Hint, the api functions are passed as a defaultProp (look at the bottom of Messages.js),
    // you can override that prop by doing <Messages api={my_mocked_api_object} />
    // 3. Add some text to the input
    //      const randomMessage = Math.random().toString();
    //      Hint:  wrapper.find('input').simulate("change", { target: { value: randomMessage } });
    // 4. Find the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering
    // 5. Click on the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering
    //      - Heads-up! you need to use await on the click button. Or even better use https://www.npmjs.com/package/wait-for-expect
    //      - What is 'act'? https://reactjs.org/docs/test-utils.html#act
    // 6. You need to update the rendered component using http://airbnb.io/enzyme/docs/api/ShallowWrapper/update.html
    // 7. Assert the 'message was sent'. Hint: validate the message you sent is on the Messages list
    // Final questions:
    // - Is this black-box testing or white-box testing?
    // - If I remove Redux from my application and put all the state in React, do I need to update this test?
    // - What's your level of confidence that the user will be able to send a message?
  });

  it(`should send a message (integration test with React Testing Library)`, async () => {
    // 1. Replace the following h1 with the component/s you are testing
    // Hint: It's very (very very) similar to what you did in the previous integration test
    const { queryAllByTestId, getByText, getByPlaceholderText } = render(
      <h1>Replace this h1 with the component/s you are testing</h1>
    );

    // 2. It expects to have zero messages in the chat
    // Hint: You might need to add something to the Message component to facilitate this

    // 3. Fire an on change event on the input message with a random text
    // Hint: You might want to use the placeholder to find the input

    // 4 fire the click event on the send message button
    // https://testing-library.com/docs/dom-testing-library/api-events#fireevent-eventname
    // Question: What do you think is the best way to find the UI element that executes the send message action?

    // https://testing-library.com/docs/dom-testing-library/api-async#wait
    await wait(() => {
      // 4. Write the following expectations:
      // A) It expects to have 1 message in the chat
      // B) It expects the last message on the chat to be the same random text
      //    Hint: You might want to use the '(some component).toHaveTextContent(some text)' to facilitate this
      //          .toHaveTextContent() comes from jest-dom's assertions -> import "@testing-library/jest-dom/extend-expect";
    });
  });

  it(`BONUS EXERCISE: should send a message (integration test without any testing library)`, async () => {
    /*
    Create an integration test using only vanilla JavaScript 😮
    Hints, you can use:
    - the setNativeValue function defined at the bottom
    - https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
    - https://developer.mozilla.org/en-US/docs/Web/API/Event
    */
  });
});

// This setNativeValue function is only for the bonus exercise
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
