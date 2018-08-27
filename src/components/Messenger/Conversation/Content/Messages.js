import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'

import colours from '../../../../styles/export/colours.css'
import { receiveMessage } from "../../../../actions/conversation"
import * as api from "../../../../api/message"
import Avatar from '../../../Layout/Avatar'
import Icon from '../../../Layout/Icon'
import ScrollNotifier from '../../../Layout/ScrollNotifier'

const MessagesWrapper = styled.div`
  display: flex;
  flex:2;
  flex-direction: column;
  justify-content: space-between;
`

const MessagesList = styled.div`
    padding: 1em;
    overflow-y: auto;
    p {
      color: ${colours.darkGrey};
      font-size: 0.9em;
    }
`

const NewMessage = styled.div`
    min-height: 50px;
    padding: 1em;
    border-top: 1px solid ${colours.mediumGrey};
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
    height: 60px;
`

const MessageBox = styled.input`
  border-color: transparent;
  width: 90%;
`

const MessageWrapper = styled.div`
  padding: 0.5em;
  display: flex;

  ${props => props.from === 'sent' && css`
    justify-content: flex-end;
  `}
`

const MessageRead = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
`

const Message = styled.div`
    border-radius: 20px;
    padding: 0.5em 1em;
    display: inline-block;
    font-size: 0.9rem;
    background: ${props => props.from === 'received' ? colours.lightGrey : colours.lightBlue};
    color: ${props => props.from === 'received' ? colours.black : colours.white}
`

const Loading = styled.p`
  text-align: center;
  padding: 10px;
  font-size: 30px !important;
`

class Messages extends React.Component {
  state = {
    newMessage: ''
  }

  sendMessage = () => {
    const { username, receiveMessage } = this.props
    const { newMessage } = this.state

    const message = api.sendMessage({
      message: newMessage,
      to: username
    })

    receiveMessage(message)

    this.setState({ newMessage: '' })
  }

  render() {
    const { conversation, username, fetchNextPage } = this.props
    const styledConversation = conversation.data.map((message, i) => (
      <MessageWrapper key={i} from={message.from === "you" ? "sent" : "received"}>
        {message.to === "you" && <Avatar username={username} size="medium" />}
        <Message from={message.from === "you" ? "sent" : "received"}>
          {message.message}
        </Message>
        {message.from === "you" && (
          <MessageRead>
            <Icon name="check-circle" size={0.6} />
          </MessageRead>
        )}
      </MessageWrapper>
    ))

    return (
      <MessagesWrapper>
        <ScrollNotifier
          onScrollAtTheBottom={fetchNextPage}
        >
          <MessagesList>
            { !conversation.loading && !styledConversation.length ?
              <p>You have no messages</p>  :
              <React.Fragment>
                {styledConversation}
                {conversation.loading?
                  <Loading>Loading...</Loading>
                  : null
                }
              </React.Fragment>
            }
          </MessagesList>
        </ScrollNotifier>
        <NewMessage>
          <MessageBox
            onChange={e => this.setState({ newMessage: e.target.value })}
            type="text"
            value={this.state.newMessage}
            placeholder="Type your message..."
          />
          <button onClick={this.sendMessage}>Send</button>
        </NewMessage>
      </MessagesWrapper>
    )
  }
}

Messages.propTypes = {
  fetchNextPage: PropTypes.func.isRequired,
  conversation: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
}

const mapDispatchToProps = ({
  receiveMessage,
})

export default connect(null, mapDispatchToProps)(Messages)
