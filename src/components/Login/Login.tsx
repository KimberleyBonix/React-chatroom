import { FormEvent } from 'react';
import './Login.scss';
import { useAppDispatch } from '../../hooks/redux';
import { logIn } from '../../store/reducers/user';

function Login() {
  const dispatch = useAppDispatch();

  function handleLogin(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(logIn());
  }

  return (
    <div className="login">
      <div className="login-panel">
        <form onSubmit={handleLogin}>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" value="Connexion" />
        </form>
      </div>
    </div>
  );
}

export default Login;
