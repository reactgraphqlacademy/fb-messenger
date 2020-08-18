# ReactJS Facebook messenger

The goals of this exercise is to learn how to use the State Hook and the Effect Hook.

## Learning objectives
- Identify use cases to imperatively modify the UI
- Apply and forward React refs to a child component or DOM element
- Use the focus control so a web app can be operated with the keyboard

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
  - [ ] Bonus 1. Implement the form using only one useState.
  - [ ] Bonus 2. Use [useRef](https://reactjs.org/docs/hooks-reference.html#useref) to create an uncontrolled password input instead of using useState. Heads up! the password component is using an **i**nput, not an **I**nput. Don't use a ref with the email Input component, yet.
  - [ ] Bonus 3. Now it's time to work on the email. Use [useRef](https://reactjs.org/docs/hooks-reference.html#useref) to create an uncontrolled email Input instead of using useState. Hint, you'll need to use [forwardRef](https://reactjs.org/docs/react-api.html#reactforwardref) in the Input component.
  - [ ] Bonus 4. When the Login page mounts, set the focus to the email input/Input (either, you can choose) component. The email should be a controlled component.

- [ ] 2. Group discussion about `src/components/Layout/TopBar.js`

  - [ ] 2.1. What does useEffect do?
  - [ ] 2.2. Why is it called effect?

- [ ] 3. Refactor the `src/components/Messenger/ThreadsContainer.js` component so it uses the useState and useEffect hooks. Tasks:
  - [ ] 3.1. Refactor the class component into a function component.
  - [ ] 3.2. Replace this.setState with useState.
  - [ ] 3.3. Invoke the fetchThreads function only once (on mount). Hint: [If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)

* [ ] 4. Refactor the `src/components/Messenger/Chat/ChatContainer.js` component so it uses the useState and useEffect hooks. Tasks:
  - [ ] 4.1. Refactor the class component into a function component.
  - [ ] 4.2. Replace this.setState with useState.
  - [ ] 4.3. Invoke the fetchMessages function only once (on mount). Hint: [only run the effect when the username from the URL changes](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects).

### Bonus

- [ ] The `src/Media/VideoPlayer.js` component is not finished. You need to pass the URL of the video to the hls.js video player so the video can be played on the chat. Important, don't forget to [destroy](https://github.com/video-dev/hls.js/blob/master/docs/API.md#final-step-destroying-switching-between-streams) the player when the VideoPlayer component unmounts.
- [ ] Expose the player that is defined VideoPlayer component using React.useImperativeHandle and then from the Messages components expose the player to the Window so you can interact with it in the console of the browser. Hints: you'll need to wrap your VideoPlayer component with React.forwardRef.

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
