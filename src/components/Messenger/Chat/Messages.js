import React, { useRef, useEffect } from "react";

import Avatar from "../../Layout/Avatar";
import Icon from "../../Layout/Icon";
import VideoPlayer from "../../Media/VideoPlayer";

const Messages = ({ messages = [], username }) => {
  const playerRef = useRef();
  // after the messages are rendered, expose the hls.js instance to window so we can play and pause it from the console

  useEffect(() => {
    window.__video = playerRef.current;
    debugger;
  }, [playerRef.current]);

  const styledConversation = messages.map((message, i) => (
    <div
      key={i}
      className={`message-wrapper ${
        message.from === "you" ? "sent" : "received"
      }`}
    >
      {message.to === "you" && <Avatar username={username} size="medium" />}
      <div className="message">
        {message.message}
        {message.videoUrl && (
          <React.Fragment>
            <br />
            <VideoPlayer ref={playerRef} url={message.videoUrl} />
          </React.Fragment>
        )}
      </div>
      {message.from === "you" && (
        <div className="message-read">
          <Icon name="check-circle" />
        </div>
      )}
    </div>
  ));

  return (
    <div className="messages">
      <div className="list">
        {styledConversation.length ? (
          styledConversation
        ) : (
          <p>You have no messages</p>
        )}
      </div>
      <div className="new-message">
        <input
          type="text"
          placeholder="Type your message..."
          className="message-box"
        />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Messages;
