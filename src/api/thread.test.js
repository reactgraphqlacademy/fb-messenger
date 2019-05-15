import * as api from "./thread";

// DON'T TEST THE FOLLOWING. WHY? -> https://reactjs.academy/blog/unit-testing-fundamentals-explained-using-javascript/#mocking

describe("#API thread endpoint", () => {
  it("should fetchThreads", () => {
    global.fetch = jest.fn();

    fetch.mockImplementation(params =>
      Promise.resolve({
        json: () => ({
          data: [],
          params
        })
      })
    );
    api.fetchThreads().then(response => {
      expect(response.data).toEqual([]);
      expect(global.fetch).toBeCalledWith("/mocks/threads.json");
    });
  });
});
