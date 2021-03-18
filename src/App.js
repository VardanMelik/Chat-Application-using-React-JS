import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


function App() {

  if (!localStorage.getItem('username'))
    return <LoginForm/>

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        publicKey="43f00b2d-93bf-47c6-84f6-c1964cdeab51"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={ (chatAppProps) => 
            <ChatFeed {...chatAppProps} /> 
          }
      />
    </div>
  );
}

export default App;
