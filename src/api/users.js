export const fetchUsers = () => (
  fetch('../mocks/users.js', {
      method: 'get'
  }).then((response) => response.json())
)
