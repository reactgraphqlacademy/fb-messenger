# React GraphQL Facebook messenger

The goals of this exercise is to learn how to use basic forms in react using state and how to do authentication with react router and JWT.

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/reactgraphqlacademy/fb-messenger/blob/master/README.md

### Step 2

```console
git checkout errors
```

### Step 3

```console
npm i
```

## Exercise

1- Handle the error thrown in the api/threads.js fetchThreads function. Hint, Error boundaries do not catch errors for asynchronous code. Tasks:

- "catch" the error so that the app doesn't crash
- Report the error
- Handle the error and show a fallback UI to the user. Hint: update the error state in ThreadsContainer

2- Handle the error thrown during the rendering of components/Threads.js. Hint, use an Error boundary. You can use `src/components/ErrorBoundary.js`.

3- Handle the error thrown in the api/message.js fetchMessages function. Hint, Error boundaries do not catch errors for asynchronous code

- "catch" the error so the app doesn't crash
- Report the error
- Handle the error and show a fallback UI to the user. Hint: set the error state in ThreadsContainer

4- Handle the error thrown during the rendering of components/Chat.js. Hint, use an Error boundary. You can use `src/components/ErrorBoundary.js`.

## Bonus Exercise

- Provide a different Error Boundary message in the Chat. Hint, you can use a fallback prop in the ErrorBoundary and use two `<ErrorBoundary>` elements

## Learning objectives

- Understand how to handle React errors (errors during rendering, in lifecycle methods, and in the constructor of the components) using ErrorBoundaries.
- Learn how to handle errors that are not ErrorBoundary errors.
- Learn how to report errors.

## Articles and links

- [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
