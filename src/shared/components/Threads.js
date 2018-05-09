import React, { Component } from 'react'
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

    return (
      <div>
        <h1>Threads</h1>
        <hr />
        {threads.length ? (
          <ul>
            {threads.map((thread, i) => (
              <li key={i}>
                <Link to={`/${thread.username}`}><img alt={thread.username} src={`/static/images/${thread.username}_sm.jpg`} /></Link>
                <p>
                  <span>{`${thread.name.first} ${thread.name.last}`}</span>
                </p>
                <p>
                  <Link to={`/${thread.username}`}>See conversation</Link>
                </p>
              </li>
            ))}
          </ul>
        ): <h2>No threads</h2> }
      </div>
    )
  }
}

export default Threads
