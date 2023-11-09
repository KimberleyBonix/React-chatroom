import { useEffect, useRef } from 'react';
import { useAppSelector } from '../../hooks/redux';
import Message from '../Message/Message';

import './Discussion.scss';

function Discussion() {
  // Get all messages from the initial state of the store
  const discussionMessages = useAppSelector((state) => state.messages.messages);

  // To get the scrolling at the end of the discussion
  const endOfDiscussion = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfDiscussion.current?.scrollIntoView();
  }, [discussionMessages]);

  // Display the component <Message /> for each message find in the initial state
  return (
    <div className="chat-discussion">
      {discussionMessages.map((message, index) => (
        <div
          className="message-container"
          key={message.id}
          // Attribuing the ref endOfDiscussion to the last message
          ref={index === discussionMessages.length - 1 ? endOfDiscussion : null}
        >
          <Message content={message} />
        </div>
      ))}
    </div>
  );
}

export default Discussion;
