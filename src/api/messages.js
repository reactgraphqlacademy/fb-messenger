export const fetchMessagesForUser = (selectedUser) => {
  const filterMessageByUsername = ({ username } = {}) => message => {
    message.from === username || message.to === username
  }

  return (
    fetch('../mocks/messages.js', {
      method: 'get',
    }).then( response =>
      response.json()
    ).filter(filterMessageByUsername(selectedUser))
  )
}
