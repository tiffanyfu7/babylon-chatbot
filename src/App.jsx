import "./App.css";
import { Links } from "./components/Links.jsx";
import { ChatContainer } from "./components/ChatContainer.jsx";
import { Header } from "./components/Header.jsx";
import { PreLoader } from "./components/PreLoader.jsx";


function App() {
  
  return (
    
    <>
      <Header />
      <PreLoader />

      <ChatContainer/>
      
      <Links />
    </>
  );
}

export default App;