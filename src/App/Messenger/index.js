import React, { Component } from 'react';
import Threads from './Threads';
import Chat from './Chat';
import mockMessages from '../../mocks/messages';
import users from '../../mocks/users';

const filterMessageByUsername = ({ username } = {}) => (message) =>
  message.from === username || message.to === username;

function Messenger({ toggleModal }) {
  const [user, setUser] = React.useState(users[0]);
  const [messages, setMessages] = React.useState(
    mockMessages.filter(filterMessageByUsername(user)),
  );

  function selectUser(userSelected = {}) {
    setUser(userSelected);
    setMessages(mockMessages.filter(filterMessageByUsername(userSelected)));
  }

  return (
    <div className="messenger">
      <Threads
        showSettings={toggleModal}
        selectUser={selectUser}
        selectedUsername={user.username}
      />
      <Chat selectedUser={user} messages={messages} />
    </div>
  );
}

export default Messenger;
