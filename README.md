# ReactJS Facebook messenger

The goal of this exercise is to learn how to use a declarative routing using React Router v4, and data fetching.

##To get started

###Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md


###Step 2
```sh
 git checkout react-router
 ```

##Exercise

1. Implement the following route http://localhost:3000/profile so it renders src/components/Profile.js. Hint, you need to edit 2 files:
    1. One file is the one where you define the /profile &lt;Route&gt;. Which file is that? Route documentation https://reacttraining.com/react-router/web/api/Route
    2. The second file is src/components/Layout/TopBar.js, edit the &lt;Link&gt;. Link documentation https://reacttraining.com/react-router/web/api/Link
. Add Route in App to ProfilePage
. Add Link in ProfilePage to /messages, why not <a> instead of Link?
. The NotFound component should be displayed when no path matches
. implement Container component in Threads
. implement Container component in Conversation
. Move the logic on lines 42-48 of UserProfile to UserProfileContainer. HINT: Use the componentWillReceiveProps() lifecycle method
. Login component should not display header and footer

###Bonus
. Given this component &lt;Route path="/messages/:username" etc &gt; in src/components/Messenger/index, how can we replace the hardcoded string "/messages" in the path by a variable so we can move that Route in the component tree and the parent path of the Route is set dynamically? Hint, look at the Link component in src/components/Messenger/Conversation/ConversationBar.
. The path /messages/:username/detail should display the UserDetail of a Conversation. The path /messages/:username should not display the UserDetail of a Conversation. You can navigate to /messages/:username/detail by clicking on the Link component in src/components/Messenger/Conversation/ConversationBar
. Move the API calls into a separate file in src/api/

1. Finish the implementation of the Login Component (located in src/components/Login.js). Requirements:
    1. The state of the inputs should be managed by the Login component (is that a controlled or uncontrolled component?). Hint: use the onChange event in the inputs
    2. Handle the onClick button to validate the inputs. For validation you can use password: 1234 and email: reactfanboy@facebook.com
    3. If the validation is correct redirect the user to the home page. Hint: you need the router. To inject the router use withRouter from 'react-router-dom'.


## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
