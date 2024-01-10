import "./App.css";
import { Links } from "./components/Links.jsx";
import { ChatContainer } from "./components/ChatContainer.jsx";
import { Header } from "./components/Header.jsx";

function App() {
  
  return (
    <>
      <Header />

      <ChatContainer/>
      
      <Links />
    </>
  );
}

export default App;