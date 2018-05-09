import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { fetchThreads } from '../api/thread'

class Threads extends Component {
  state = {
    threads: []
  }

  componentDidMount() {
    fetchThreads().then(({ threads }) => {
      this.setState({ threads })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    const { threads = [] } = this.state

    return ([
      <h1>Threads</h1>,
      threads.length ? (
        <ul>
          {threads.map((thread, i) => (
            <li key={i}>
              <Link to={`/${thread.username}`}><img src={thread.username} /></Link>
              <p>
                <span>{`${thread.name.first} ${thread.name.last}`}</span>
                <Link to={`/${thread.username}`}>See conversation</Link>
              </p>
            </li>
          ))}
        </ul>
      ): <h2>No threads</h2> 
    ])
  }
}

export default Threads
