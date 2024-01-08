import { useEffect, useState } from "react";
import "./App.css";

import { createThread, retrieveThread, deleteThread, createMessage, listMessages, createRun, createResponse, retrieveAssistant } from "./assistant.js";
import { InputBar } from "./components/InputBar.jsx";
import { Links } from "./components/Links.jsx";
import BabylonLogo from "./images/BabylonLogo.png";

function App() {
  const [threadID, setThreadID] = useState("");
  const [runID, setRunID] = useState("");
  const [response, setResponse] = useState({})

  let message = "How are you doing?"


  useEffect(() => {
    createThread()
      .then((obj) => {
        console.log(obj), setThreadID(String(obj.id));
      })
      .catch((error) => console.log(error));

  }, []);

  console.log(threadID); 

  useEffect(() => {
    if (threadID) { // thing to remember is that when we have a dependency array, it pushes default and then the updated value as well
      createMessage(threadID, message)
        .then((obj) => {
          console.log(obj);
        })
        .catch((error) => console.log(error));

      
    }
  }, [threadID]);

  useEffect(() => {
    if(threadID){
      
      createRun(threadID)
      .then((obj) => {
        console.log(obj);
        setRunID(obj.id);
      })
      .catch((error) => console.log(error))

    }


  }, [threadID]);


  useEffect(() => {

    if(runID){
      createResponse(threadID, runID)
       .then((obj) => console.log(obj))
       .catch((error) => console.log(error))

       console.log("this is working")

       listMessages(threadID)
       .then((obj) =>
        setResponse(obj))
        .catch((error) => console.log(error))
       
       console.log(response)
       
       
       if(response.data !== undefined){
         const responseMessage = response.data
         .filter((obj) => obj.id === runID && obj.role === "assistant")
         .pop();
       }
       else{
         console.log("no response")
       }
       
       console.log(responseMessage);


    }


    
  }, [runID])



  

  console.log(runID)



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
