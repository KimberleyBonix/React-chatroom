import { useAppSelector } from '../../hooks/redux';
import Message from '../Message/Message';

import './Discussion.scss';

function Discussion() {
  // Get all messages from the initial state of the store
  const discussionMessages = useAppSelector((state) => state.messages.messages);

  // Display the component <Message /> for each message find in the initial state
  return (
    <div className="chat-discussion">
      {discussionMessages.map((message) => (
        <div className="message-container" key={message}>
          <Message content={message} />
        </div>
      ))}
    </div>
  );
}

export default Discussion;
