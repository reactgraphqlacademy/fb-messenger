import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Threads from "./Threads";
import { fetchFirstThread } from "../../api/thread";
import { receiveThread } from "../../actions";

// This is a selector function
function selectThread(state) {
  return state.thread;
}

const ThreadsContainer = () => {
  // getting the state from Redux
  const thread = useSelector(selectThread);
  const dispatch = useDispatch();

  useEffect(() => {
    // setting the state in Redux by dispatching an action
    fetchFirstThread().then(thread => dispatch(receiveThread(thread)));
  }, []);

  return <Threads thread={thread} />;
};

export default ThreadsContainer;
