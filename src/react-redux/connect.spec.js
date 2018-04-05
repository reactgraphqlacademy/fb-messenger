import TestUtils from 'react-addons-test-utils'
import { Context } from 'react-container-component'
import sinon from 'sinon'
import React from 'react'
import { connect } from './connect'

describe("My simplified src/react-redux/connect.js", () => {
  it("should get the store from a key called 'store' in the context and map store.getState and store.dispatch to the props of the component", () => {
    class DumbComponent extends React.Component {
      componentDidMount() {
        this.props.dispatch({type:'test'})
      }
      render() {
        return <i></i>
      }
    }
    const mapStateToProps = () => {}
    const mapDispatchToProps = dispatch => ({dispatch})
    const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(DumbComponent)
    const getState = sinon.spy()
    const dispatch = sinon.spy()
    const subscribe = sinon.spy()

    TestUtils.renderIntoDocument(
      <Context store={{ getState, dispatch, subscribe }}>
        <ConnectedComponent />
      </Context>
    )

    // assertions:
    sinon.assert.called(getState)
    sinon.assert.called(dispatch)
    sinon.assert.called(subscribe)
  })

  it("should get the store from a key called 'store' in the context and subscribe the component's forceUpdate method to changes from the store using store.subscribe", () => {
    class DumbComponent extends React.Component {
      componentDidMount() {
        this.props.dispatch({type:'test'})
      }
      render() {
        return <i></i>
      }
    }
    const mapStateToProps = () => {}
    const mapDispatchToProps = dispatch => ({dispatch})
    const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(DumbComponent)
    const getState = sinon.spy()
    const dispatch = sinon.spy()
    const subscribe = sinon.spy()

    TestUtils.renderIntoDocument(
      <Context store={{ getState, dispatch, subscribe }}>
        <ConnectedComponent />
      </Context>
    )

    // assertions:
    sinon.assert.called(subscribe)
  })
})
