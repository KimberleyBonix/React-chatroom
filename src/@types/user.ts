export type Account = {
  username: string;
  password: string;
};

export type UserState = {
  isLog: boolean;
  account: Account;
};
