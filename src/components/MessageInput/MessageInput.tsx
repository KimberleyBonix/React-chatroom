import { FormEvent } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { sendMessage } from '../../store/reducers/message';

function MessageInput() {
  const dispatch = useAppDispatch();

  function handleSubmitMessage(event: FormEvent<HTMLFormElement>): void {
    // Prevent from page refresh
    event.preventDefault();

    // Get the value of the input field
    const formData = new FormData(event.currentTarget);
    const newMessage = formData.get('text');

    // Trigger the action "sendMessage" if there is a value
    if (newMessage) {
      dispatch(sendMessage(newMessage));
    }

    // Reset the input
    event.currentTarget.reset();
  }
  return (
    <form onSubmit={handleSubmitMessage}>
      <input type="text" placeholder="Enter Message" name="text" />
      <button type="submit">Send</button>
    </form>
  );
}

export default MessageInput;