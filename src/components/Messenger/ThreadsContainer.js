import React, { useState, useEffect } from 'react'

import Threads from './Threads'
import { fetchThreads } from '../../api/thread'

export default function ThreadsContainer() {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    fetchThreads().then(({ threads }) => {
      setThreads(threads)
    })
  }, [])

  return <Threads threads={threads} />
}
