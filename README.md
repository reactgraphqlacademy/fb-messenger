## ReactJS Facebook messenger

The goal of this exercise is to learn how to think in React.

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

### We recommend you to start from top to bottom, and refactor, refactor, refactor

1. Replace the “footer” HTML at the bottom of App.js using the src/Footer.js component.

2. Refactor the topbar section by creating a functional component and pass the dependencies via props. Make sure everything works Hint: this will be similar to Modal.js

3. Create a component for “Messenger” and pass down the dependencies from App via props. Make sure everything works. You can start by making a Messenger folder with an index.js.

4. Is there any state in App/index.js that should be in the Messenger component? Refactor this logic out of App/index.js and into Messenger. Then, create further functional components from the contents of Messenger and pass them down dependencies via props. Hint: Create a Threads.js file and a Chat folder with an index.js file inside the Messenger folder.

5. Question: Is it possible to move showModal from App/index.js down the tree? why/why not?

6. Create a Link component for the a tags in the footer. Who are the children of the Link component? Link should receive a prop called `to` that becomes the href of the <a href={to} ...

## Bonus exercise

Split the Chat component into the following components:

- ChatBar.js
- Messages.js
- UserDetail.js
- index.js

## Learning objectives

- Learn the difference between declarative and imperative code.
- Comprehend the value of breaking down your UI into reusable components.
- Understand how to pass down dependencies via props.
- Understand which components should hold state and how to share and manipulate state in React.
- Feel comfortable with class component and functional component syntax and using jsx.

## Links

- [https://reactjs.academy/blog/introduction-to-thinking-in-react/](https://reactjs.academy/blog/introduction-to-thinking-in-react/)
- [https://reactjs.academy/blog/react-is-all-about-composition-react-hooks-render-props-hocs/#react-composition-model](https://reactjs.academy/blog/react-is-all-about-composition-react-hooks-render-props-hocs/#react-composition-model)
- [https://reactjs.org/docs/introducing-jsx.html](https://reactjs.org/docs/introducing-jsx.html)
- [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)
- [https://reactjs.org/docs/composition-vs-inheritance.html](https://reactjs.org/docs/composition-vs-inheritance.html)
- [babel repl example](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wCg0IA7AZ3gAkkAbRiAYV0kqUvgF44AFAEo4vAHwEAFsHwBuUqQA8AE2AA3OGkYpq1AHIoQSXvgo8UwLlHxjScOCvWbtug0ZM4A7jbv24AbwZmNg4qbhgAX19FAHpVNVtY-LEgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=es2015,es2016,es2017,react,stage-2&prettier=false&targets=&version=7.3.3)
- [https://reactjs.org/docs/lifting-state-up.html](https://reactjs.org/docs/lifting-state-up.html)
- [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
