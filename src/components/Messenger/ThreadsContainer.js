import React, { useState, useEffect } from "react";

import Threads from "./Threads";
import { fetchThreads } from "../../api/thread";

const ThreadsContainer = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetchThreads()
      .then(({ threads }) => {
        setThreads(threads);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //}, [fetchThreads]); fetchTreads it's not required because it's not a value that participates in the React data flow.
  // Those values would be props, state, and anything derived from them.
  // https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies

  return <Threads threads={threads} />;
};

export default ThreadsContainer;
