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
      .catch(err => {
        console.log(err);
      });
  }, [fetchThreads]);

  return <Threads threads={threads} />;
};

export default ThreadsContainer;
