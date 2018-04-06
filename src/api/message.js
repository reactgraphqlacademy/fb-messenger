export const fetchConversation = (username) => {

  const filterMessageByUsername = message => {
    return message.from === username || message.to === username
  }

  return (
    fetch('/mocks/messages.js', {
      method: 'get',
    })
    .then(response => response.json())
    .then(messages => {
      return messages.filter(filterMessageByUsername)
    })
  )
}

export const sendMessage = ({ message, to }) => {
  // This fake api just returns the message with the current time and random id
  return {
    from: 'you',
    to,
    message,
    time: Date.now(),
    id: Math.random().toString(36).substr(2, 10)
  }
}
