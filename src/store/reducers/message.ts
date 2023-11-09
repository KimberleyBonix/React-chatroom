import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChatState, TMessage } from '../../@types/message';

const initialState: ChatState = {
  messages: [
    {
      id: crypto.randomUUID(),
      author: 'Sarah Winnemecca',
      content: 'ouais ouais ouais',
    },
    {
      id: crypto.randomUUID(),
      author: 'Sarah Winnemecca',
      content: 'on est loooooo',
    },
  ],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState, // state initial
  reducers: {
    sendMessage(state, action: PayloadAction<string>) {
      const newMessage: TMessage = {
        id: crypto.randomUUID(),
        author: 'Sarah Winnemecca',
        content: action.payload,
      };
      // Push a new object in the array "messages"
      state.messages.push(newMessage);
    },
  },
});

export const { sendMessage } = messagesSlice.actions;

export default messagesSlice;
