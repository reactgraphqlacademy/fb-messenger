export const fetchMessages = username => {
  const filterMessageByUsername = message => {
    return message.from === username || message.to === username
  }

  return fetch('/mocks/messages.js', {
    method: 'get',
  })
    .then(response => response.json())
    .then(messages => {
      return messages.filter(filterMessageByUsername)
    })
}

export const fetchMessagesWithLatency = username => {
  const filterMessageByUsername = message => {
    return message.from === username || message.to === username
  }

  return new Promise(resolve =>
    setTimeout(
      () => {
        fetch('/mocks/messages.js', {
          method: 'get',
        })
          .then(response => response.json())
          .then(messages => {
            resolve(messages.filter(filterMessageByUsername))
          })
      },
      2000 // to simulate network latency
    )
  )
}
