import { connect } from 'react-redux'

// This is the 'reducer'.  It tells Redux what the state should be, after a new message arrives.
// The 'export' keyword is here so that it be 'import'ed elsewhere and plugged into Redux.
export const changeStateInResponseToNewMessage = (state = { messages:[] }, action) => {
  switch (action.type) {
    case "NEW_MESSAGE":
      return {...state, messages: [...state.messages, action.message]}
  }
  return state;
}

// This is an 'action creator' function.  It takes a message and returns an action that represents the message arriving.
const makeNewMessageAction = message => ({type: "NEW_MESSAGE", message: message});

// This is a React Component that outputs all the messages in paragraphs and a form for adding a new message.
const MyApp = props => (
  <div>
    {props.messages.map(message => <p>{message}</p>)}
    <form onSubmit={props.newMessage("Hi!  This is a new message in this list")}>
      <button>Add new message</button>
    </form>
  </div>
)

// This function pulls all the messages out of the state and adds them to a prop called 'messages'
// If you are wondering where the 'messenger' comes from; every reducer has a name, which we give it in
// the function 'combineReducers' that we use when setting up Redux.  I've assumed here that the name of 
// the reducer that creates the messages (i.e. changeStateInResponseToNewMessage) was 'messenger'.
const mapStateToProps = state => ({messages: state.messenger.messenges});

// This function makes a prop called 'newMessage' which is a function that, when called, dispatches a new-message action.
const mapDispatchToProps = dispatch => ({newMessage: message => dispatch(makeNewMessageAction(message))});

// This is where we plug our app into Redux using the above functions mapStateToProps and mapDispatchToProps
connect(mapStateToProps, mapDispatchToProps)(MyApp)

/*
  P.s. you can also do mapDispatchToProps like this:
  
  const mapDispatchToProps = {newMessage: makeNewMessageAction};

  This does the same thing as the code above.  It is a shorter way but not as flexible.
*/