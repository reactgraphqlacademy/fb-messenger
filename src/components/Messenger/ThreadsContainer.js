import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Threads from "./Threads";
import { fetchFirstThread } from "../../api/thread";
import { receiveThread } from "../../actions/thread";
import { selectThread } from "../../reducers/thread";
import { store } from "../../";

const compose = (...functions) => initialValue =>
  functions.reduceRight((acc, fn) => fn(acc), initialValue);

const ThreadsContainer = () => {
  const thread = useSelector(selectThread);
  // Only for options A and C
  const dispatch = useDispatch();
  useEffect(() => {
    // Option A
    fetchFirstThread().then(thread => dispatch(receiveThread(thread)));
    // Option B
    fetchFirstThread().then(thread => store.dispatch(receiveThread(thread)));
    // Option C
    fetchFirstThread().then(compose(dispatch, receiveThread));
    // Option D
    fetchFirstThread().then(compose(store.dispatch, receiveThread));
  }, []);

  return <Threads thread={thread} />;
};

export default ThreadsContainer;
