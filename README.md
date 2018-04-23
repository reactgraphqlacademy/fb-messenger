# ReactJS Facebook messenger

The goal of this exercise is to learn how to use GraphQL queries and mutations using Apollo client.

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md


### Step 2
```sh
 git checkout graphql-apollo
 ```

### Step 3
```sh
 npm i
 ```

## Exercise

1- Fetch the threads using the threads query
2- Replace the threads query by threadsConnection
3- Fetch a Conversation by using the conversationConnection query
4- Use the sendMessage mutation to send a message. Sending a message should:
    - Update the conversation to display the new message
    - Update the threads to display the new message

### Bonus

- Use the getSession query to log in a user instead of calling the REST api

## Links

- [https://dev-blog.apollodata.com/explaining-graphql-connections-c48b7c3d6976](https://dev-blog.apollodata.com/explaining-graphql-connections-c48b7c3d6976)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
