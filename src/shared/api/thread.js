export const fetchThreads = () => (
  fetch('/static/mocks/threads.json', {
      method: 'get'
  }).then((response) => {
    return response.json()
  })
)
