import { useEffect, useState } from "react";
import "./App.css";

import { createThread, retrieveThread, deleteThread, createMessage, listMessages, createRun, createResponse, retrieveAssistant } from "./assistant.js";
import { InputBar } from "./components/InputBar.jsx";
import { Links } from "./components/Links.jsx";
import BabylonLogo from "./images/BabylonLogo.png";

function App() {
  const [threadID, setThreadID] = useState("");
  const [runID, setRunID] = useState("");
  const [response, setResponse] = useState([]);

  let message = "How are you doing?";

  useEffect(() => {
    createThread()
      .then((obj) => { setThreadID(String(obj.id)) })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (threadID) {
      createMessage(threadID, message)
        .then((obj) => { console.log("user message"); console.log(obj); })
        .catch((error) => console.log(error));      
    }
  }, [threadID]);

  useEffect(() => {
    if(threadID){   
      createRun(threadID)
      .then((obj) => { setRunID(obj.id) })
      .catch((error) => console.log(error))
    }
  }, [threadID]);

  useEffect(() => {
    if (runID) {
      createResponse(threadID, runID)
        .then((obj) => {console.log("response obj"); console.log(obj)})
        .catch((error) => console.log(error));

      listMessages(threadID)
        .then((obj) => setResponse(obj.data))
        .catch((error) => console.log(error));
       
      console.log("response list")
      console.log(response);
    }
  }, [runID]);

  useEffect(() => {
    if (response) {
      const responseMessage = response.filter((obj) => obj.id === runID && obj.role === "assistant").pop();
      console.log(responseMessage);
    }
  }, [response]);

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
