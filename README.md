# Facebook Messenger Clone

The goals of this exercise are to learn how to use a declarative routing using React Router, and learn how to fetch data into your components.

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

- [ ] 5. Refactor the `src/components/Messenger/Chat/Chat.js` component so it implements the [container component pattern](https://medium.com/@learnreact/container-components-c0e67432e005) as well. You have a `src/components/Messenger/Chat/ChatContainer.js` file with some comments and tips. Hint: You will also have to edit the import in `src/components/Messenger/index.js`.

- [ ] 6. Move the logic related to needsToFetchUser from render method in `src/components/Messenger/Chat/Chat.js` to the `componentDidUpdate()` lifecycle method in `src/components/Messenger/Chat/ChatContainer.js`. Why do you think [componentDidUpdate](https://reactjs.org/docs/react-component.html#componentdidupdate) is a better place?

- [ ] 7. In the following url [http://localhost:3000/login](http://localhost:3000/login), the `src/component/Login.js` should not display the `<TopBar>` and `<Footer>`. Hint: Why not try moving the Login component up the tree.

- [ ] 8. Display the number of messages in `<ChatBar>`.

### Bonus

- [ ] Given this component `<Route path="/messages/:username">` in `src/components/Messenger/index`, how can we replace the hardcoded string `"/messages"` in the path by a variable so we can move that Route in the component tree and the parent path of the Route is set dynamically? Hint, look at the Link component in `src/components/Messenger/Chat/ChatBar`.
- [ ] The path `/messages/:username/detail` should display the `UserDetail` of a Chat. The path `/messages/:username` should not display the `UserDetail` of a Chat. You can navigate to `/messages/:username/detail` by clicking on the Link component in `src/components/Messenger/Chat/ChatBar`
- [ ] Refactor as many components as you can into function components, meaning using functions instead of classes to define the component.

### Extra Bonus

- [ ] 1. In `src/components/Layout/TopBar.js` create a MyLink component that returns a `<Link>` component if the prop `to` doesn't startWith "http" (you can use `props.to.startsWith("http")`), otherwise it should return an `<a>`. Replace your Link components in `src/components/Layout/TopBar.js` with your MyLink component. Heads up! you need to think of the `children` prop.
     - Example: <MyLink to="/messages">Some link</MyLink> -> it should render a `Link`
     - Example: <MyLink to="https://google.com">Some link</MyLink> -> it should render an `a`
- [ ] 2. Make sure that **any** props that are passed to `MyLink` are passed to `Link` or to `a` accordingly.
     - Example: `<MyLink to="/messages" className="cool-css">Some link</MyLink>` should return `<Link to="messages" className="cool-css">Some link</Link>`

### Super Bonus
- [ ] 1. In `src/components/Layout/TopBar.js` create a MyLink component that returns either a Link if to doesn't startWith "http" (`props.to.startsWith("http")`). Replace your Link components in  `src/components/Layout/TopBar.js` with your MyLink component. Heads up! you need to think of the `children` prop.
        - Example: <MyLink to="/messages">Some link</MyLink> -> it should render a `Link`
        - Example: <MyLink to="https://google.com">Some link</MyLink>  -> it should render an `a`
- [ ] 2. Make sure all the props that are passed to MyLink are passed to Link or a. It should pass on any prop we might add in the future.
    example: <MyLink to="/messages"className="potatoe">Some link</MyLink> -> <Link to="messages" className="potatoe">Some link</Link>

## Learning objectives

- Understand the difference beween classic approaches and declarative routing
- Learn how to implement declarative routing with react-router
- Understand the use of the `componentDidMount()` lifecycle method
- Implement basic data fetching in React using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

## Articles and links

- [Lecture: Declarative Routing with React Router v4](https://medium.com/leanjs/declarative-routing-with-react-router-v4-7419c198e93f)
- [React Router Docs and approach](https://reacttraining.com/react-router/core/guides/philosophy)
- [Lifecycle methods](https://reactjs.org/docs/react-component.html#componentdidmount)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [React lifecycle methods diagram](https://twitter.com/dan_abramov/status/981712092611989509)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
