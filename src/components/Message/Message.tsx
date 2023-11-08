import { TMessage } from '../../@types/message';

type MessageProps = {
  content: TMessage;
};

function Message({ content: message }: MessageProps) {
  return <p>{message}</p>;
}

export default Message;
