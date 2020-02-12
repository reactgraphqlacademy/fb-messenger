# ReactJS Facebook messenger

The goals of this exercise is to learn how to use the State Hook and the Effect Hook.

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md

### Step 2

```sh
git checkout hooks
```

### Step 3

```sh
npm install
```

## Exercise

- [ ] 1. Refactor the `src/components/Login/index.js` component so it uses the useState hook. Tasks:

  - [ ] 1.1. The coach live codes how to implement the email state using useState.
  - [ ] 2.2. The trainees refactor the password state to use useState.
  - [ ] 3.3. Should email and password use the same useState hook? Discuss with your peers.

- [ ] 2. Group discussion about `src/components/Layout/TopBar.js`

  - [ ] 2.1. What does useEffect do?
  - [ ] 2.2. Why is it called effect?

- [ ] 3. Refactor the `src/components/Messenger/ThreadsContainer.js` component so it uses the useState and useEffect hooks. Tasks:
  - [ ] 3.1. Refactor the class component into a function component.
  - [ ] 3.2. Replace this.setState with useState.
  - [ ] 3.3. Invoke the fetchThreads function only once (on mount). Hint: [If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)

* [ ] 4. Refactor the `src/components/Messenger/Chat/ChatContainer.js` component so it uses the useState and useEffect hooks. Tasks:
  - [ ] 3.1. Refactor the class component into a function component.
  - [ ] 3.2. Replace this.setState with useState.
  - [ ] 3.3. Invoke the fetchMessages function only once (on mount). Hint: [only run the effect when the username from the URL changes](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)

### Bonus

Refactor your app from the [recap exercise](https://github.com/reactgraphqlacademy/recap) to use hooks.

## Articles and links

## Documentation

- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)
- [Using the State Hook
  ](https://reactjs.org/docs/hooks-state.html)
- [Using the Effect Hook
  ](https://reactjs.org/docs/hooks-effect.html)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
