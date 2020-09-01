## FB Messenger

## Learning objectives

- Differentiate between declarative and imperative programming
- Identify what's state and which components should hold it
- Determine when to lift the state up

## Requirements

You need to be comfortable writing JavaScript (ES6: Module system, class syntax, destructuring assignment).
You need to have `node`and `npm`installed in your computer.

## Clone the repo

```sh
git clone https://github.com/leanjscom/fb-messenger.git
```

Then `cd` into fb-messenger

```sh
cd fb-messenger
```

## Branches

You will need to head to the correct branch for the exercise.

How? run:

```sh
git pull --all

git branch --all

git checkout thinking-in-react
```

## Getting started:

```sh
yarn && yarn start
```

## 🥑 Before we start the exercise

This exercise builds up on [this previous exercise](https://github.com/reactgraphqlacademy/thinking-in-react). Please make sure you've done the previosu exercise before doing this one.

## 🤸‍♀️ Exercise

1. Replace the “footer” HTML at the bottom of App/index.js using the src/Footer.js component.

2. Refactor the topbar section (you can indentify it by `className="top-bar"`) creating a function component (you can call it `TopBar`) and pass the required props. Hint, `TopBar` only requires 1 prop and that prop is a function. Make sure everything works before moving on to the next step.

3. Create a component called `Messenger` that is children of `App`. `Messenger` should contain all the code of `<div className="messenger">`. Suggestion, create a folder called Messenger with an index.js and create the `Messenger` component inside `Messenger/index.js`. Let's use this step as a stepping stone in our refactoring. Don't put any state inside the `Messenger` component yet, unless you want to implement task 3 and 4 at the same time (only if you are really sure about what you are doing). In this step, instead of adding any state inside the `Messenger` component we are going to pass it as props from the parent component.

4. Move as much state as you can from `App` to `Messenger`.

5. Break down the `<Messenger>` component inside `Messenger/index.js` into smaller components for `<div className="threads">` and `<div className="chat">`. Suggestion, Create a `Threads.js` file and a folder `Chat` with an `index.js` inside the `Messenger` folder. Move as much state as you can from `Messenger` to `Messenger/Threads.js` and `Messenger/Chat/index.js`

6. If you look at the React Dev Tools you'll see that the entire app is rerendered everytime we toggle the modal. Is it possible to rerender fewer components in the tree when we toggle the modal? If so, implement a solution.

7. Create a Link component for the a tags in the footer. Who are the children of the Link component? Link should receive a prop called `to` that becomes the href of the <a href={to} ... Hint, you can leverage the special prop called `children`.

8. Everytime we call the `selectUser` function we call two useState "setter" functions: 1) `setCurrentUsername` and 2) `setMessages`. Questions:
   - Does `selectUser` trigger two rerenders of the `<Messenger>` component?
   - Should we merge both `setCurrentUsername` and `setMessages` functions in a single `useState`?
   - Is there a better place to keep the state of the current username?

## 🏋️‍♀️ Bonus exercise

Split the Chat component into the following component hierarchy:

-- Chat.js

---- ChatBar.js

---- Messages.js

-------- UserDetail.js

## Links

- [Lecture: Introduction to Thinking in React](https://reactgraphql.academy/react/introduction-to-thinking-in-react/)
- [https://reactjs.academy/blog/react-is-all-about-composition-react-hooks-render-props-hocs/#react-composition-model](https://reactjs.academy/blog/react-is-all-about-composition-react-hooks-render-props-hocs/#react-composition-model)
- [https://reactjs.org/docs/introducing-jsx.html](https://reactjs.org/docs/introducing-jsx.html)
- [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)
- [https://reactjs.org/docs/composition-vs-inheritance.html](https://reactjs.org/docs/composition-vs-inheritance.html)
- [babel repl example](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wCg0IA7AZ3gAkkAbRiAYV0kqUvgF44AFAEo4vAHwEAFsHwBuUqQA8AE2AA3OGkYpq1AHIoQSXvgo8UwLlHxjScOCvWbtug0ZM4A7jbv24AbwZmNg4qbhgAX19FAHpVNVtY-LEgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=es2015,es2016,es2017,react,stage-2&prettier=false&targets=&version=7.3.3)
- [https://reactjs.org/docs/lifting-state-up.html](https://reactjs.org/docs/lifting-state-up.html)
- [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
