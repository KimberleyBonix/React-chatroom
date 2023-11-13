import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserState, Account as TAccount } from '../../@types/user';

const initialState: UserState = {
  isLog: false,
  account: {
    username: 'bouclierman@herocorp.io',
    password: 'jennifer',
  },
};

export const login = createAsyncThunk('login', async (account: TAccount) => {
  const { data } = await axios.post<{ pseudo: string }>(
    'http://localhost:3001/login',
    account
  );

  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState, // state initial
  reducers: {
    logIn(state) {
      state.isLog = true;
      console.log(`user log : ${state.isLog}`);
    },
    changeUsernameInputValue(
      state,
      action: PayloadAction<{
        fieldName: keyof UserState['account'];
        value: string;
      }>
    ) {
      const { fieldName, value } = action.payload;
      state.account[fieldName] = value;
    },
  },
  // Pour pouvoir gérer d'autre action et particulièrement les actions asynchrone, je vais utiliser la propriété extraReducers.
  extraReducers(builder) {
    builder
      // Lorsque mon action asynchrone commence
      .addCase(login.pending, (state) => {})
      // Si mon Action asynchrone par en erreur
      .addCase(login.rejected, (state) => {})
      // Dans le cas où mon action de connexion est réussi
      .addCase(login.fulfilled, (state, action) => {});
  },
});

export const { logIn, changeUsernameInputValue } = userSlice.actions;

export default userSlice;
