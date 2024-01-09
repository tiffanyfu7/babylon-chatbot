import "./App.css";
import { ChatContainer } from "./components/ChatContainer.jsx";
import { Links } from "./components/Links.jsx";
import BabylonLogo from "./images/BabylonLogo.png";

function App() {
  return (
    <>
      <h1 className="chatBotHeader">
        {" "}
        <img className="babyImg" src={BabylonLogo} alt="Babylon Farms Logo" />
        WaterBoy ChatBot
      </h1>

      <p className="chatBotSlogan"> Meet WaterBoy, your personal Babylon AI</p>

      {/* <MessageBox >
            <UserMessage />
            <AssistantMessage />
      </MessageBox> */}

      <ChatContainer />
      

      <Links />
    </>
  );
}

export default App;