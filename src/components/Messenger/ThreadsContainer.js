import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Threads from "./Threads";
import { fetchFirstThread } from "../../api/thread";
import { receiveThread } from "../../actions/thread";
import { selectThread } from "../../reducers/thread";
import { store } from "../../";

const compose = (...functions) => initialValue =>
  functions.reduceRight((acc, fn) => fn(acc), initialValue);

const ThreadsContainer = () => {
  const thread = useSelector(selectThread);

  useEffect(() => {
    fetchFirstThread().then(compose(store.dispatch, receiveThread));
  }, []);

  return <Threads thread={thread} />;
};

export default ThreadsContainer;
