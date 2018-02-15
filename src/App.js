import React, { Component } from 'react'
import './App.css'

import users from './mocks/users.js'
import messages from './mocks/messages.js'

class App extends Component {

    constructor() {
        super()
        this.state = {
            messages: messages,
            selectedUser: users[0]
        }
    }

    selectUser = (user) => {
        this.setState({selectedUser : user})
    }

    handleChange = () => {

    }

    newMessage = () => {
        console.log('new msg clicked')
    }

    showSettings = () => {
        console.log('settings clicked')
    }

    render() {

        const sortUsers = (user) => {
            console.log(user)
        // function(messages) {
        //     console.log(messages)
        //     return function compareusers(user) {
        //         console.log(user)
        //         return messages.map(message => message.from === user.username || message.to === user.username)
        //     }
        // }
        }

        const displayUsers = (user, i) => (
                <li key={i} onClick={() => this.selectUser(user)} className="preview">
                    <img src={`images/${user.username}_lg.jpg`} alt={`${user.username}`} className="avatar large" />
                    <div>
                        <div className="user-name">{`${user.name.first} ${user.name.last}`}</div>
                        <div className="message-preview">
                            message preview
                        </div>
                    </div>
                </li>
            )

        const messengerList = users
            // .sort(sortUsers(this.state.messages))
            .map(displayUsers)

        const filterMessages = message => message.from === this.state.selectedUser.username || message.to === this.state.selectedUser.username

        const displayMessages = (message,i) =>
            <div key={i} className={`message-wrapper ${message.from === 'you' ? 'sent' : 'received'}`}>
                {message.to === 'you' &&
                <img src={`images/${this.state.selectedUser.username}_lg.jpg`}
                     alt={`${this.state.selectedUser.username}`} className="avatar medium"/>
                }
                <div className="message">
                    {message.message}
                </div>
                {message.from === 'you' &&
                <div className="message-read">
                    <i class="icon fa fa-check-circle" ></i>
                </div>
                }
            </div>

        const conversation = this.state.messages
            .filter(filterMessages)
            .map(displayMessages)

        return (
          <div className="App">

            <div className="top-bar">
                <i class="icon fab fa-facebook-messenger"></i>
            </div>

            <div className="content">

                <div className="messenger">
                    <div className="messenger-info-bar">
                        <div className="info-bar-content">
                            <div onClick={this.showSettings}>
                                <i class="icon fas fa-cog"></i>
                            </div>
                            Messenger
                            <div onClick={this.newMessage}>
                                <i class="icon fas fa-edit"></i>
                            </div>
                        </div>
                    </div>
                    <div className="messenger-list">
                      <ul>
                          {messengerList}
                      </ul>
                    </div>
                </div>

                <div className="conversation">
                    <div className="conversation-info-bar">
                        <div className="info-bar-content">
                            <div>&nbsp;</div>
                            <div className="conversation-title">
                                <div className="user-name">
                                {this.state.selectedUser.name && `${this.state.selectedUser.name.first} ${this.state.selectedUser.name.last}`}
                                </div>
                                <div className="last-active">
                                    Active 20m ago
                                </div>
                            </div>
                            <div className="conversation-menu">
                                <div>
                                    <i class="icon fas fa-phone"></i>
                                </div>
                                <div>
                                    <i class="icon fas fa-video"></i>
                                </div>
                                <div>
                                    <i class="icon fas fa-info-circle"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="conversation-content-wrapper">
                        <div className="conversation-detail">
                            <div className="messages">
                                {conversation || <p>You have no messages</p>}
                            </div>
                        <div className="type-message-wrapper">
                                <input type="text" placeholder="Type your message..." onChange={this.handleChange} className="message-box" />
                            <div className="send-button">
                                Send
                            </div>
                        </div>
                        </div>
                        <div className="user-detail-wrapper">
                            <div className="user-detail-content">
                                <div className="user-detail">
                                    <div className="avatar large">
                                        <img src={`images/${this.state.selectedUser.username}_lg.jpg`} alt={`${this.state.selectedUser.username}`} className="avatar large" />
                                    </div>
                                    <div className="user-title">
                                        <div className="user-name">
                                            {this.state.selectedUser.name && `${this.state.selectedUser.name.first} ${this.state.selectedUser.name.last}`}
                                        </div>
                                        <div className="last-active">
                                            Active 20m ago
                                        </div>
                                    </div>
                                </div>
                                <div>
                                  <i class="icon fas fa-cog"></i>
                                </div>
                            </div>
                            <div className="options">
                                Options
                            </div>
                            <div className="facebook-profile">
                                Facebook Profile

                            </div>
                        </div>
                    </div>
                </div>

            </div>
          </div>
        )
    }
}

export default App;
