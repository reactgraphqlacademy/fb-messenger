# ReactJS Facebook messenger

The goals of this exercise is to learn how to use basic forms in react using state and how to do authentication with react router and JWT.

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md

### Step 2

```sh
 git checkout forms-and-auth
```

### Step 3

```sh
 npm i
```

## Exercise

### Part 1, login form

Finish the implementation of the Login component located in src/components/Login/index.js. Requirements:

To do this part you'll need the following credentials for the server side validation: email: `clone@facebook.com` & password: `123`

- The state of the inputs should be managed by the Login component (are the inputs controlled or uncontrolled components?). Hint, use the onChange event in the inputs.
- Add some simple client side validation, if the email or password are not provided don't submit the form and notify the user by using `alert('Email and password are required')`
- If the client side validation and the server side validation are correct then redirect the user to the home page, you can use the prop history.push(). When the server side validation is correct the API returns a 200 status.

### Part 2, authorization

- If the user is not logged in, all the pages should redirect to /login. You need to use the [&lt;Redirect&gt;](https://reacttraining.com/react-router/web/api/Redirect) component in src/components/Root.js. There is an [example](https://reacttraining.com/react-router/web/example/auth-workflow) in the React Router documentation. Hint, you just need to look at the render prop of the PrivateRoute component from the example.
- The log-out button in the TopBar should:
  - Remove the session cookie. Hint, there is a function in src/auth.js for that.
  - Redirect the user to /login. Hint, use [&lt;Link&gt;](https://reacttraining.com/react-router/web/api/Link) in TopBar.js from React Router
- Display the username of the session in the TopBar. Hint, the username is in the JWT cookie. Use the getSession function in src/auth.js to get the session.

### Part 3, form components

Create an Input component that replaces the &lt;input&gt; in your app and can be controlled and uncontrolled. You can create your Input component in src/components/form/Input.js, there are some tips in that file. Replace the inputs in Login/index.js with your Input component.

### Bonus

- Move the fetch api call to '/api/auth' from src/components/Login/index.js to the src/api folder
- If the user is not logged in, when she or he goes to a private route it should redirect to it after logging in. Example, if the user is not logged in, and the the user goes to [http://localhost:3000/messages](http://localhost:3000/messages), then the user will be redirected to [http://localhost:3000/login](http://localhost:3000/login). After logging in, the user should be redirected to [http://localhost:3000/messages](http://localhost:3000/messages), not to the home page.
- In the Login component, make the redirect when the login is successful more declarative. Meaning, instead of using the prop history.push(), use the &lt;Redirect&gt; component. You have an example [here](https://reacttraining.com/react-router/web/example/auth-workflow). Hint, look at the Login component in the example.

## Articles and links

### ReactJS Academy

- [React forms controlled & uncontrolled components](https://reactjs.academy/blog/react-forms-controlled-and-uncontrolled-components/)
- [Secure React apps using JWT and React Router](https://reactjs.academy/blog/secure-react-apps-using-JWT-and-react-router/)

### React Router

- [Redirect push()](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/Redirect.js#L88)
- [Redirect documentation example](https://reacttraining.com/react-router/web/api/Redirect)
- [react-router-dom Redirect](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/Redirect.js)

### JWT

- [JWT](https://jwt.io/)
- [Stateless sessions explained](https://auth0.com/blog/stateless-auth-for-stateful-minds/)

### Controlled Vs. Uncontrolled components

- [https://reactjs.org/docs/uncontrolled-components.html](https://reactjs.org/docs/uncontrolled-components.html)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
