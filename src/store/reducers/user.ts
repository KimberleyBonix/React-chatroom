import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../@types/user';

const initialState: UserState = {
  isLog: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState, // state initial
  reducers: {
    logIn(state) {
      state.isLog = true;
      console.log(`user log : ${state.isLog}`);
    },
  },
});

export const { logIn } = userSlice.actions;

export default userSlice;
