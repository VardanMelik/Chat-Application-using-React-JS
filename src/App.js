import './App.css';
import { ChatEngine, ChatFeed } from 'react-chat-engine'


function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        publicKey="43f00b2d-93bf-47c6-84f6-c1964cdeab51"
        userName="React-Chat-Admin"
        userSecret="2H5MLUadrJ5nH8fL"
        renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps} /> }
      />
    </div>
  );
}

export default App;
