import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Threads from "./Threads";
import { fetchFirstThread } from "../../api/thread";
import { receiveThread } from "../../actions/thread";

// const compose = (...functions) => initialValue =>
//   functions.reduceRight((acc, fn) => fn(acc), initialValue);
function selectThread(state) {
  return state.thread;
}

const ThreadsContainer = () => {
  const thread = useSelector(selectThread);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchFirstThread().then(thread => dispatch(receiveThread(thread)));
    // use the compose in advanced training
    // fetchFirstThread().then(compose(dispatch, receiveThread));
  });

  return <Threads thread={thread} />;
};

export default ThreadsContainer;
