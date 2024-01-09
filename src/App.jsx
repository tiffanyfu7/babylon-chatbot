import { useEffect, useState } from "react";
import "./App.css";

import { createThread, retrieveThread, deleteThread, createMessage, listMessages, createRun, createResponse, retrieveAssistant } from "./assistant.js";
import { InputBar } from "./components/InputBar.jsx";
import { Links } from "./components/Links.jsx";
import BabylonLogo from "./images/BabylonLogo.png";

function App() {
  const [threadID, setThreadID] = useState("");
  const [runID, setRunID] = useState("");
  const [response, setResponse] = useState(null);
  const [messageListData, setMessageListData] = useState([{}]);

  let message = "What are the dimensions of the Galleri";

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
        .then((obj) => {
          if (obj !== null) { setResponse(obj); }
        })
        .catch((error) => console.log(error));
    }
  }, [runID]);

  useEffect(() => {
    if (response !== null) {
      listMessages(threadID)
        .then((array) => { setMessageListData(array) })
        .catch((error) => console.log(error));
    }
  }, [response]);

  useEffect(() => {
    if (messageListData !== null) {
      const responseMessage = messageListData.filter((obj) => obj.run_id === runID && obj.role === "assistant").pop();
      if(responseMessage) console.log(responseMessage.content[0]["text"].value);
    }
  }, [messageListData]);

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