import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Threads from "./Threads";
import { fetchFirstThread } from "../../api/thread";
import { receiveThread } from "../../actions/thread";
import { store } from "../../";

console.log("store", store);

function selectThread(state) {
  return state.thread;
}

const compose = (...functions) => initialValue =>
  functions.reduceRight((acc, fn) => fn(acc), initialValue);

const ThreadsContainer = () => {
  const thread = useSelector(selectThread);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchFirstThread().then(compose(dispatch, receiveThread));
  }, []);

  return <Threads thread={thread} />;
};

export default ThreadsContainer;
