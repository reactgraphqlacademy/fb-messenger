export const logIn = ({ password, email }) => fetch(`/api/auth`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include',
  body: JSON.stringify({ password, email })
})
