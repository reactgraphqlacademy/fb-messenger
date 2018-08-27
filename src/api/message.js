export const fetchConversation = username => (
  fetch(`/api/conversation/${username}`)
    .then(response => response.json())
    .then(data => new Promise((resolve) => {
      // this simulates some network latency
      setTimeout(() => resolve(data), 1000)
    }))
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
