import React from "react";

import ConversationBar from "./ConversationBar";
import ConversationContent from "./Content";

const Conversation = ({ conversation = [], match }) => {
  const { username } = match.params;

  return (
    <div className="conversation">
      <ConversationBar
        username={username}
        match={match}
        totalMessages={conversation.length}
      />
      <ConversationContent
        match={match}
        conversation={conversation}
        username={username}
      />
    </div>
  );
};

export default Conversation;
