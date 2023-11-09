// COMPONENTS
import MessageInput from '../MessageInput/MessageInput';
import Discussion from '../Discussion/Discussion';

// STYLES
import './Chat.scss';
import Header from '../Header/Headers';

function Chat() {
  return (
    <div className="chat">
      <Header />

      <Discussion />

      <MessageInput />
    </div>
  );
}

export default Chat;
