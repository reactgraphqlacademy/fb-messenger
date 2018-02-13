import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import './App.css';

class App extends Component {

    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('/data/users.js', {
            method: 'get'
        }).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({ users: data })
        }).catch((err)=> {
            console.log(err)
        })
    }

    showConversation = () => {
        console.log('user clicked')
    }

    newMessage = () => {
        console.log('new msg clicked')
    }

    showSettings = () => {
        console.log('settings clicked')
    }

    render() {

        let messengerList = this.state.users.map((user, i) => (
            <li key={i} onClick={this.showConversation} className="preview">
                <img src={`images/${user.username}_lg.jpg`} alt={`${user.username}`} className="avatar large" />
                <span className="user-name">{`${user.name.first} ${user.name.last}`}</span>
            </li>
        ))

        return (
          <div className="App">

            <div className="top-bar">
                <FontAwesome
                    name="facebook-messenger"
                    className="icon"
                />

            </div>

            <div className="content">

                <div className="messenger">
                    <div className="messenger-info-bar">
                        <div className="info-bar-content">
                            <div onClick={this.showSettings}>
                                <FontAwesome
                                    name="cog"
                                    className="icon"
                                />
                            </div>
                            Messenger
                            <div onClick={this.newMessage}>
                                <FontAwesome
                                    name="edit"
                                    className="icon"
                                />
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
                                User Name
                                <div className="last-active">
                                    Active 20m ago
                                </div>
                            </div>
                            <div className="conversation-menu">
                                <div>
                                    <FontAwesome
                                        name="phone"
                                        className="icon"
                                    />
                                </div>
                                <div>
                                    <FontAwesome
                                        name="video"
                                        className="icon"
                                    />
                                </div>
                                <div>
                                    <FontAwesome
                                        name="info-circle"
                                        className="icon"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="conversation-content-wrapper">
                        <div className="conversation-detail">
                            <div className="messages">
                                <div className="message-wrapper received">
                                    <div className="avatar medium">
                                        avatar
                                    </div>
                                    <div className="message">
                                        received message
                                    </div>
                                </div>
                                <div className="message-wrapper sent">
                                    <div className="message">
                                        some sent message
                                    </div>
                                    <div className="message-read">
                                        <FontAwesome
                                            name="check-circle"
                                            className="icon"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="type-message-wrapper">
                                <div className="type-message-box">
                                    Type a message...
                                </div>
                                <div className="send-button">
                                    Send
                                </div>
                            </div>
                        </div>
                        <div className="user-detail-wrapper">
                            <div className="user-detail-content">
                                <div className="user-detail">
                                    <div className="avatar large">
                                        user avatar
                                    </div>
                                    <div className="username">
                                        User Name
                                        <div className="last-active">
                                            Active 20m ago
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <FontAwesome
                                        name="cog"
                                        className="icon"
                                    />
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
