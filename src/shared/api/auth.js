import { API_BASE_URL } from '../../config'

export const logIn = ({ password, email }) => fetch(`${API_BASE_URL}/api/auth`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include',
  body: JSON.stringify({ password, email })
})
