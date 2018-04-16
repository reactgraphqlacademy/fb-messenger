export const fetchThreads = () => (
  fetch('/mocks/threads.json')
  .then(response => response.json())
)

export const fetchFirstThread = () => (
  fetch('/mocks/threads.json')
  .then(response => response.json())
  .then(({ threads }) => threads[0])
)
