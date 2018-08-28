export const fetchThreads = () => (
  fetch('/mocks/threads.json', {
      method: 'get'
  })
  .then(response => response.json())
)
