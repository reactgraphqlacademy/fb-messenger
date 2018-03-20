# ReactJS Facebook messenger

The goals of this exercise are to learn how to use a declarative routing using React Router v4, and learn how to fetch data into your components.

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md


### Step 2
```sh
 git checkout react-router
 ```

## Exercise

### Part 1, login form

Finish the implementation of the Login Component located in src/components/Login.js. Requirements:

- The state of the inputs should be managed by the Login component (is that a controlled or uncontrolled component?). Hint: use the onChange event in the inputs.
- Handle the onClick Button to validate the inputs. For validation you use password: 123 and email: clone@facebook.com
- If the validation is correct then redirect the user to the home page, you can use the prop history.push(). When the validation is correct the API returns a 200 status. When the validation is not correct the API returns a 401 status.

### Part 2, authorization

- If the user is not logged in, all the pages should redirect to /login. You need to use the [&lt;Redirect&gt;](https://reacttraining.com/react-router/web/api/Redirect) component in src/components/Root.js. There is an [example](https://reacttraining.com/react-router/web/example/auth-workflow) in the React Router documentation. Hint, you just need to look at the render prop of the PrivateRoute component from the example.
- The log-out button in the TopBar should:
  - Remove the session cookie. Hint, there is a function in src/auth.js for that
  - Redirect the user to /login. Hint, use withRouter in TopBar.js to get a prop in order to push the '/login' path.
- Display the username of the session in the TopBar. Hint, the username is in the JWT cookie. Use the getSession function in src/auth.js to get the session.

### Part 3, form components

Create an uncontrolled component called Input that replaces the &lt;input&gt; in Login.js. You can create your Input component in src/components/form/Input.js, there are some tips in that file.

### Bonus
- If the user is not logged in, when it goes to a private route it should redirect to it after logging in. Example, if the user is not logged in, and the the user goes to [http://localhost:3000/messages](http://localhost:3000/messages), then the user will be redirected to [http://localhost:3000/login](http://localhost:3000/login). After logging in, the user should be redirected to [http://localhost:3000/messages](http://localhost:3000/messages), not to the home page.
- In the Login component, make the redirect when the login is successful more declarative. Meaning, instead of using the prop history.push(), use the &lt;Redirect&gt; component. You have an example [here](https://reacttraining.com/react-router/web/example/auth-workflow). Hint, look at the Login component in the example.
- Move the fetch api call to '/api/auth' into the src/api folder

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
