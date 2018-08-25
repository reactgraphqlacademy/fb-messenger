export const fetchConversation = username => (
  fetch('/api/conversation')
    .then(response => response.json())
    .then(data => data)
)

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
