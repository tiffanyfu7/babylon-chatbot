import "./App.css";
import { Links } from "./components/Links.jsx";
import BabylonLogo from "./images/BabylonLogo.png";
import { ChatContainer } from "./components/ChatContainer";

function App() {
  
  return (
    <>
      <h1 className="chatBotHeader">
        {" "}
        <img className="babyImg" src={BabylonLogo} alt="Babylon Farms Logo" />
        WaterBoy ChatBot
      </h1>

      <p className="chatBotSlogan"> Meet WaterBoy, your personal Babylon AI</p>

      <ChatContainer/>
      
      <Links />
    </>
  );
}

export default App;