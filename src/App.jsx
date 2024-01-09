import { useEffect, useState } from "react";
import "./App.css";
import { createThread, retrieveThread, deleteThread, createMessage, listMessages, createRun, createResponse, retrieveAssistant } from "./assistant.js";
import { InputBar } from "./components/InputBar.jsx";
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

      <InputBar />
      

      <Links />
    </>
  );
}

export default App;