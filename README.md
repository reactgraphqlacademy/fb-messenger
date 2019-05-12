# ReactJS Facebook messenger

The goals of this exercise are to learn how to use a declarative routing using React Router v4, and learn how to fetch data into your components.

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md

### Step 2

```sh
 git checkout react-router
```

### Step 3

```sh
 npm install
 npm start
```

## Exercise

- [ ] 1. Implement the following route [http://localhost:3000/profile](http://localhost:3000/profile) so it renders `src/components/Profile.js`. Hint, you need to edit 2 files:
  1. One file is the one where you define the /profile `<Route>`. Which file is that? Hint, think of the component tree and which component should be the parent of `<Profile>`. [Route documentation](https://reacttraining.com/react-router/web/api/Route)
  1. The second file is `src/components/Layout/TopBar.js`, edit the `<Link>` so when the user clicks on the Link it navigates to /profile. [Link documentation](https://reacttraining.com/react-router/web/api/Link)

- [ ] 2. Add a Link component in `src/components/Profile.js` to the path "/messages". Why do you think `<Link>` is better than `<a>`? Hint. Look at the network tab in the Chrome Dev Tools and navigate from one page to the other using `<Link>` and then using `<a>`

- [ ] 3. The `NotFound` component should be displayed when no path matches in `<App>`. Example, navigating to [http://localhost:3000/bla-bla-bla](http://localhost:3000/bla-bla-bla) should display NotFound.js. Hint: [https://reacttraining.com/react-router/web/example/no-match](https://reacttraining.com/react-router/web/example/no-match)

- [ ] 4. Refactor the `src/components/Messenger/Threads.js` component so it implements the container component pattern, [please read this article first](https://medium.com/@learnreact/container-components-c0e67432e005). You have a `src/components/Messenger/ThreadsContainer.js` file with some comments and tips. Hint: You will also have to edit the import in `src/components/Messenger/index.js`

- [ ] 5. Refactor the `src/components/Messenger/Conversation/Conversation.js` component so it implements the [container component pattern](https://medium.com/@learnreact/container-components-c0e67432e005) as well. You have a `src/components/Messenger/Conversation/ConversationContainer.js` file with some comments and tips. Hint: You will also have to edit the import in `src/components/Messenger/index.js`.

- [ ] 6. Move the logic on lines 36-44 of `src/components/Messenger/Conversation/Conversation.js` to the `componentDidUpdate()` lifecycle method in `src/components/Messenger/Conversation/ConversationContainer.js`. Why do you think [componentDidUpdate](https://reactjs.org/docs/react-component.html#componentdidupdate) is a better place?

- [ ] 7. In the following url [http://localhost:3000/login](http://localhost:3000/login), the `src/component/Login.js` should not display the `<TopBar>` and `<Footer>`. Hint: Why not try moving the Login component up the tree.

- [ ] 8. Display the number of messages in `<ConversationBar>`.

### Bonus

- [ ] Refactor as many components as you can into functional components, meaning using functions instead of classes to define the component.
- [ ] Given this component `<Route path="/messages/:username">` in `src/components/Messenger/index`, how can we replace the hardcoded string `"/messages"` in the path by a variable so we can move that Route in the component tree and the parent path of the Route is set dynamically? Hint, look at the Link component in `src/components/Messenger/Conversation/ConversationBar`.
- [ ] The path `/messages/:username/detail` should display the `UserDetail` of a Conversation. The path `/messages/:username` should not display the `UserDetail` of a Conversation. You can navigate to `/messages/:username/detail` by clicking on the Link component in `src/components/Messenger/Conversation/ConversationBar`
- [ ] [http://localhost:3000/messages](http://localhost:3000/messages) should not take 100% of the width of the screen. It should take the same width as when there is a Conversation selected. Hint, move the `<Route>` to the Conversation inside `<ConversationSection>`
- [ ] Add prop-types to all the components that need it.

## Learning objectives

- Understand the difference beween classic approaches and declarative routing
- Learn how to implement declarative routing with react-router v4^
- Understand the use of the `componentDidMount()` lifecycle method
- Implement basic data fetching in React using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

## Articles and links

- [Declarative Routing with React Router v4](https://medium.com/leanjs/declarative-routing-with-react-router-v4-7419c198e93f)
- [React Router Docs and approach](https://reacttraining.com/react-router/core/guides/philosophy)
- [Lifecycle methods](https://reactjs.org/docs/react-component.html#componentdidmount)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
