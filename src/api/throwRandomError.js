function throwRandomError(freq = 2) {
  const value = Math.floor(Math.random() * freq + 1);
  if (value % freq === 0) {
    throw new Error("Snap! Threads API is down! 🔥");
  }
}

export default throwRandomError;
