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

1. Implement the following route [http://localhost:3000/profile](http://localhost:3000/profile) so it renders src/components/Profile.js. Hint, you need to edit 2 files:
    1. One file is the one where you define the /profile &lt;Route&gt;. Which file is that? Hint, think of the component tree and which component should be the parent of &lt;Profile&gt;. [https://reacttraining.com/react-router/web/api/Route](Route documentation)
    2. The second file is src/components/Layout/TopBar.js, edit the &lt;Link&gt;. [https://reacttraining.com/react-router/web/api/Link](Link documentation)
2. Add a Link in Profile.js to the path /messages. Why do you think &lt;Link&gt; is better than &lt;a&gt;?
3. The NotFound component should be displayed when no path matches in &lt;App&gt;. Example navigating to [http://localhost:3000/bla-bla-bla](http://localhost:3000/bla-bla-bla) should display NotFound.js
4. Refactor the Treads component so it implements the [container component pattern](https://medium.com/@learnreact/container-components-c0e67432e005). You have a ThreadsContainer file with some comments and tips. Hint: You will also have to edit the import in src/components/Messenger/index.js
5. Refactor the Conversation component so it implements the [container component pattern](https://medium.com/@learnreact/container-components-c0e67432e005). You have a ConversationContainer file with some comments and tips. Hint: You will also have to edit the import in src/components/Messenger/index.js
6. Move the logic on lines 39-45 of Conversation.js to the componentWillReceiveProps() lifecycle method in ConversationContainer.js. Why do you think componentWillReceiveProps is a better place?
7. In the following url [http://localhost:3000/login](http://localhost:3000/login), the src/component/Login.js should not display the &lt;TopBar&gt; and &lt;Footer&gt;. HINT: Why not try moving the Login component up the tree.

###Bonus
- Make all the components that you can stateless, meaning using functions instead of classes to define the component.
- Given this component &lt;Route path="/messages/:username" etc &gt; in src/components/Messenger/index, how can we replace the hardcoded string "/messages" in the path by a variable so we can move that Route in the component tree and the parent path of the Route is set dynamically? Hint, look at the Link component in src/components/Messenger/Conversation/ConversationBar.
- The path /messages/:username/detail should display the UserDetail of a Conversation. The path /messages/:username should not display the UserDetail of a Conversation. You can navigate to /messages/:username/detail by clicking on the Link component in src/components/Messenger/Conversation/ConversationBar
- [http://localhost:3000/messages](http://localhost:3000/messages) should not take 100% of the width of the screen. It should take the same width as when there is a Conversation selected. Hint, move the &lt;Route&gt; to the Conversation inside &lt;ConversationSection&gt;
- Add prop-types to all the components that need it.

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
