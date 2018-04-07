import React from 'react'
import PropTypes from 'prop-types'
// this component just adds the store in the context

export class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
}
