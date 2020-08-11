# Facebook Messenger Clone / Routing and data fetching

## Learning objectives

- Implement navigations between pages using a declarative routing.
- Fetch data from a REST API using URL parameters and the useEffect hook.
- Identify and group layouts using a path in the URL.

## Teaching method

1. Collaborative learning environment & pair programming.
   - Rooms with small groups
   - Work together, discuss, help each other.
2. We try to foster critical thinking.
   - ⬆️ Discovery ⬇️ Instruction
3. We don’t explain everything you need to know before the exercise:
   - Learn by doing (and teaching ;)
   - The exercise is meant to help you build a mental model

More about our (https://reactgraphql.academy/blog/react-graphql-academy-teaching-method/)[teaching method here]

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md

### Step 2

```sh
 git checkout routing-and-data-fetching
```

### Step 3

```sh
 npm install
 npm start
```

## 🥑 Before we start the exercise part 1

Let's discuss the following with your coach & peers:

1. If you look at `src/components/App.js`, how many children (`Route` components) does the `Switch` have?
2. If we open the React dev tools and we select the `Switch` component (you need to `npm start` the app), how many `Route` components were rendered? Why?
3. ⚠️ Show trainees the network tab in the browser dev tools. Make sure they know how it works because they will use it during the exercise.

## 🤸‍♀️ Exercise part 1

- [ ] 1. Implement the following route [http://localhost:3000/profile](http://localhost:3000/profile) so it renders `src/components/Profile.js`. To do so, you'll have to edit the file where you define the "/profile" `<Route>`. Which file is that? Hint, to find the file think of which component in the component tree should be the parent of `<Profile>`. [Route documentation](https://reacttraining.com/react-router/web/api/Route).

- [ ] 2. Go to `src/components/Layout/TopBar.js` and edit the `<Link>` component so when the user clicks on the Link "@clone" it navigates to "/profile". [Link documentation](https://reacttraining.com/react-router/web/api/Link).

* [ ] 3. The `NotFound` component should be displayed when no path matches in `<App>`. Example, navigating to [http://localhost:3000/bla-bla-bla](http://localhost:3000/bla-bla-bla) should display NotFound.js. Hint: [https://reacttraining.com/react-router/web/example/no-match](https://reacttraining.com/react-router/web/example/no-match)

* [ ] 4. In `src/components/Messenger/index.js` we have 3 `Route`s for each thread. Hardcoding the username is not very good idea. To fix that you are going to use 1 `Route` with a URL parameter for the username. To use a URL parameter replace the usernames with ":username". You have an [example in the React Router docs](https://reactrouter.com/web/example/url-params).

* [ ] 5. Display the username in `src/components/Messenger/Chat/ChatBar.js` using the `useParams` hook. You have an [example in the React Router docs](https://reactrouter.com/web/example/url-params).

## 🏋️‍♀️ Bonus exercise part 1

A) The component `src/components/Profile.js` uses an `<a>` to navigate to the path "/messages". Why do you think `<Link>` would be better than `<a>`? Hint. Look at the network tab in the dev tools and navigate from one page to the other using the "@clone" `<Link>` in the TopBar and the "See messages" `<a>` in http://localhost:3000/profile.

B) This page http://localhost:3000/messages/crazypeacock512/detail should display the `UserDetail` component. This page http://localhost:3000/messages/crazypeacock512 should **NOT** display the `UserDetail` component. Notice the difference is the "/detail" at the end of the URL. You can navigate to the detail page by clicking on the blue icon ℹ️ at the top-right corner of the chat.

- How would you implement that?
- Is the information about the detail component being displayed or not being displayed (in other words, display detail equals true or false) part of the state of the app? What's the source of truth that determines if the detail is displayed or not?

## 🥑 Before we start the exercise part 2

Let's have a look at `src/components/Layout/TopBar.js` and discuss with the coach and your peers:

1. What does useEffect do?
2. If we refactor the code as follows and then we click on "CLICK ME AND LOOK AT THE DOCUMENT TITLE (TAB)", do you think:

   ```js
   console.log('rendering 🧐')
   useEffect(() => {
     document.title = `${count} clicks`
   }, []) // 👀 we've added the square brackets []. https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
   ```

   - The console will log "rendering 🧐"?
   - The document title will change?
   - The state `count` will have been incremented?

3. Why do you think it is called "effect"?

## 🤸‍♀️ Exercise part 2

- [ ] 7. Refactor the `src/components/Messenger/Threads.js` component so it implements the _container component_ pattern, [please read this article first about the pattern](https://medium.com/@learnreact/container-components-c0e67432e005). You have a `src/components/Messenger/ThreadsContainer.js` file with some comments and tips (look for this emoji 👩‍🏫).

  - [ ] 7.1. Which component is the children of `src/components/Messenger/ThreadsContainer.js`?
  - [ ] 7.2. Which component is the parent of `src/components/Messenger/ThreadsContainer.js` after the refactoring? Can you point its parent component in your code? Which file do you need to look at to do so? Hint, you will need to edit an `import` in that file to complete this exercise.
  - [ ] 7.3. Do you think the _container pattern_ is useful? What for? Discuss with your peers and coach.

- [ ] 8. Implement the `src/components/Messenger/Chat/Chat.js` component so it fetches and displays the messages. There are some comments and tips in that file, look for this emoji 👩‍🏫.

- [ ] 9. The following URL [http://localhost:3000/login](http://localhost:3000/login) should not display the `<TopBar>` and `<Footer>`. Hint: To implement that, don't think of "removing" things in certain conditions, think of "moving" things in the component tree.

- [ ] 10. The `<ChatBar>` receives the username via `useParams`. The `<Messages>` is a sibling of `<ChatBar>`. `<Messages>` receives the username from the parent component `<Chat>` via props instead of using `useParams`. Should we use `useParams` as well in `<Messages>`? or instead pass down a prop from `<Chat>` to `<ChatBar>`? Discuss with your peers.

## 🏋️‍♀️ Bonus exercise part 2

We are going to add some loading indicator to our chat. To do so follow the next steps:

- In `src/components/Messenger/Chat/Chat.js` replace the function `fetchMessages` with `fetchMessagesWithLatency`.
- Instead of having only `messages` in the state, we are also going to have `loading` and `error`. Are you going to use 3 `useState` or one `useState` containing `messages`, `loading` and `error`? Hint, think of the cases that will make the different states change and how related are to each other. You can try one approach and refactor it later.
- `src/components/Messenger/Chat/Chat.js` should return

```javascript
if (loading) {
  return 'loading'
} else if (error) {
  return error
} else {
  return // the previous return
}
```

## 🧘‍♀️ Homework

- [ ] 1. In `src/components/Layout/TopBar.js` create a `MyLink` component that returns the `Link` component from `react-router-dom` if the prop `to` doesn't startWith "http" (you can use `props.to.startsWith("http")`), otherwise it should return an `a`. Replace your `Link` components in `src/components/Layout/TopBar.js` with your `MyLink` component. Heads up! you need to think of the `children` prop.
     - Example: `<MyLink to="/messages">Some link</MyLink>` -> it should render `Link`
     - Example: `<MyLink to="https://google.com">Some link</MyLink>` -> it should render `a`
- [ ] 2. Make sure that **any** props that are passed to `MyLink` are passed to `Link` or to `a` accordingly.
     - Example: `<MyLink to="/messages" className="cool-css">Some link</MyLink>` should return `<Link to="messages" className="cool-css">Some link</Link>`

## Articles and links

- [Lecture: Declarative Routing with React Router v4](https://medium.com/leanjs/declarative-routing-with-react-router-v4-7419c198e93f)
- [React Router Docs and approach](https://reacttraining.com/react-router/core/guides/philosophy)
- [Lifecycle methods](https://reactjs.org/docs/react-component.html#componentdidmount)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [React lifecycle methods diagram](https://twitter.com/dan_abramov/status/981712092611989509)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
