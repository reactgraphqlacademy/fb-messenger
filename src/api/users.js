export const fetchUsers = () => (
  fetch('/mocks/users.json', {
      method: 'get'
  }).then((response) => {
    return response.json()
  })
  .catch(err => {
    console.log(err);
    debugger;
  })
)
