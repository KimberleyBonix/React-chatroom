// COMPONENTS
import MessageInput from '../MessageInput/MessageInput';
import Discussion from '../Discussion/Discussion';
import Header from '../Header/Headers';
import Login from '../Login/Login';

// STYLES
import './App.scss';
import Channels from '../Channels/Channels';
import { useAppSelector } from '../../hooks/redux';

function App() {
  const logStatus: boolean = useAppSelector((state) => state.user.isLog);
  return (
    <div className="app">
      {!logStatus && <Login />}
      <div className="channels">
        <Channels />
      </div>
      <div className="chat">
        <Header />
        <Discussion />
        <MessageInput />
      </div>
    </div>
  );
}

export default App;
