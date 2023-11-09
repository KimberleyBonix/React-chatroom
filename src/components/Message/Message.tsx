import { TMessage } from '../../@types/message';

import './Message.scss';

type MessageProps = {
  content: TMessage;
};

function Message({ content: message }: MessageProps) {
  return (
    <div className="message inbound">
      <div className="message__avatar">
        <img src="../../../public/default_avatar.png" alt="avatar" />
      </div>
      <div className="message__content">
        <div className="message__content-author">Sarah Winnemucca</div>
        <div className="message__content-text">{message}</div>
        <div className="message__content-timestamp">Hier à 9:37</div>
      </div>
    </div>
  );
}

export default Message;
