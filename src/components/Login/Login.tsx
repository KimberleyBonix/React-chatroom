import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeUsernameInputValue, logIn } from '../../store/reducers/user';

import './Login.scss';

function Login() {
  const dispatch = useAppDispatch();

  const usernameValue = useAppSelector((state) => state.user.account.username);
  const pwdValue = useAppSelector((state) => state.user.account.password);

  function handleUsernameValue(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    dispatch(
      changeUsernameInputValue({
        fieldName: 'password',
        value: newValue,
      })
    );
  }

  function handleLogin(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(logIn());
  }

  return (
    <div className="login">
      <div className="login-panel">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={usernameValue}
            onChange={handleUsernameValue}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={pwdValue}
          />
          <input type="submit" value="Connexion" />
        </form>
      </div>
    </div>
  );
}

export default Login;
