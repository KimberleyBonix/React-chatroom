import MessageInput from '../MessageInput/MessageInput';
import Discussion from '../Discussion/Discussion';

function Chat() {
  return (
    <div className="Chat">
      <Discussion />

      <MessageInput />
    </div>
  );
}

export default Chat;
