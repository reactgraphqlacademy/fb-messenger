import throwRandomError from "./throwRandomError";

export const fetchThreads = () => {
  throwRandomError();
  return fetch("/mocks/threads.json", {
    method: "get"
  }).then(response => {
    try {
      throwRandomError();
      return response.json();
    } catch (e) {
      return { threads: "🐛🐛🐛🐛🐛" };
    }
  });
};
