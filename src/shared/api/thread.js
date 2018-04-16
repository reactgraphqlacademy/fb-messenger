import 'isomorphic-fetch'
import { API_BASE_URL } from '../../config'

export const fetchThreads = () => (
  fetch(`${API_BASE_URL}/static/mocks/threads.json`)
  .then(response => response.json())
)

export const fetchFirstThread = () => (
  fetch(`${API_BASE_URL}/static/mocks/threads.json`)
  .then(response => response.json())
  .then(({ threads }) => threads[0])
)
