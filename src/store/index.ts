import { configureStore } from '@reduxjs/toolkit';
import messagesSlice from './reducers/message';
import userSlice from './reducers/user';

const store = configureStore({
  // A la création du store
  // Redux va exécuter chaque reducer avec l'action "@@INIT"
  reducer: {
    messages: messagesSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
