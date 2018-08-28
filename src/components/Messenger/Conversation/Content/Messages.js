import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import colours from '../../../../styles/export/colours.css'
import { receiveMessage } from "../../../../actions/conversation"
import * as api from "../../../../api/message"
import Avatar from '../../../Layout/Avatar'
import Icon from '../../../Layout/Icon'

const MessagesWrapper = styled.div`
  display: flex;
  flex:2;
  flex-direction: column;
  justify-content: space-between;
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

const LoadMore = styled.button`
  width: 100%;
  background: #eee;
  margin-top:20px;
  padding: 8px 0;
`

const Button = styled.button`
  :hover {
    cursor:not-allowed;
  }
`

class Messages extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.username !== prevProps.match.params.username
    ) {
      this.scroller.scrollTop = this.scroller.scrollHeight
    }
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
        <div
          style={{ padding: '1em', overflowY: 'auto' }}
          ref={node => this.scroller = node}
        >
          { !conversation.loading && !styledConversation.length ?
            <p>You have no messages</p>  :
            <React.Fragment>
              {styledConversation}
              {conversation.loading?
                <Loading>Loading...</Loading>
                : <LoadMore onClick={fetchNextPage}>Load more</LoadMore>
              }
            </React.Fragment>
          }
        </div>
        <NewMessage>
          <MessageBox
            disabled
            type="text"
            value=""
          />
          <Button disabled>Send</Button>
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

export default withRouter(connect(null, mapDispatchToProps)(Messages))
