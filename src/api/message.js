import throwRandomError from "./throwRandomError";

export const fetchMessages = username => {
  throwRandomError();
  const filterMessageByUsername = message => {
    return message.from === username || message.to === username;
  };

  return fetch("/mocks/messages.js", {
    method: "get"
  })
    .then(response => response.json())
    .then(messages => {
      try {
        throwRandomError();
        return messages.filter(filterMessageByUsername);
      } catch (e) {
        return "🐛🐛🐛🐛🐛";
      }
    });
};
