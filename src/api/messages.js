export const fetchMessagesForUser = (selectedUser) => {

  const filterMessageByUsername = ({ username } = {}) => message => {
    return message.from === username || message.to === username
  }

  return (
    fetch('/mocks/messages.js', {
      method: 'get',
    }).then( response => {
      return response.json();
    })
  )
}
