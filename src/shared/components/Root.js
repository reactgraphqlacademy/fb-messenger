import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Threads from './Threads'
import Conversation from './Conversation'

const Root = () => (
  <Switch>
    <Route exact path="/" component={Threads} />
    <Route path="/:username" component={Conversation} />
  </Switch>
)

export default Root
