export const fetchThreads = () => (
  fetch('/mocks/threads.json', {
      method: 'get'
  })
  .then(response => response.json())
)

// export const fetchFirstThread = () => (
//   fetch('/mocks/threads.json', {
//       method: 'get'
//   })
//   .then(response => response.json())
//   .then(({ threads }) => threads[0])
// )
