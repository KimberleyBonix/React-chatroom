import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChatState, TMessage } from '../../@types/message';

const initialState: ChatState = {
  messages: ['Hello, world', "J'ai le poil tout neuf"],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState, // state initial
  reducers: {
    sendMessage(state, action: PayloadAction<TMessage>) {
      // Push a new string in the array "messages"
      state.messages.push(action.payload);
    },
  },
});

export const { sendMessage } = messagesSlice.actions;

export default messagesSlice;
