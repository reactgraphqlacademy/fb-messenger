import * as api from './thread'

// DON'T DO THIS

describe('#API thread endpoint', () => {
  it('should fetchThreads', () => {
    global.fetch = jest.fn()

    fetch.mockImplementation(
      (params) => Promise.resolve({
        json: () => ({
          data,
          params
        })
      })
    )
    api.fetchThreads().then((response) => {
      expect(response.data).toEqual([])
      expect(global.fetch).toBeCalledWith(
        '/mocks/threads.json'
      )
    })
  })
})
