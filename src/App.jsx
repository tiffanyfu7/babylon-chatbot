import "./App.css";
import { Links } from "./components/Links.jsx";
import BabylonLogo from "./images/BabylonLogo.png";
import { ChatContainer } from "./components/ChatContainer.jsx";
import { Header } from "./components/Header.jsx";
import { PreLoader } from "./components/PreLoader.jsx";


function App() {
  
  return (
    
    <>
      <Header />
      <PreLoader />

      <h1 className="chatBotHeader">
        {" "}
        <img className="babyImg" src={BabylonLogo} alt="Babylon Farms Logo" />
        WaterBoy
      </h1>

      <p className="chatBotSlogan"> Meet WaterBoy, your personal Babylon Micro-Farms ChatBot</p>

      <ChatContainer/>
      
      <Links />
    </>
  );
}

export default App;