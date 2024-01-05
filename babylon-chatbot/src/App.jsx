import { useEffect, useState } from "react";
import "./App.css";
import {
  createThread,
  retrieveThread,
  deleteThread,
  createMessage,
  retrieveAssistant,
} from "./assistant.js";
import { InputBar } from "./components/InputBar.jsx";
import { Links } from "./components/Links.jsx";
import BabylonLogo from "./images/BabylonLogo.png";

function App() {
  const [threadID, setThreadID] = useState("");
  //const [message, setMessage] = useState("");

  const message = "createMessage() work";

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

  return (
    <>
      <h1 className="chatBotHeader">
        {" "}
        <img className="babyImg" src={BabylonLogo} alt="Babylon Farms Logo" />
        WaterBoy ChatBot
      </h1>

      <p className="chatBotSlogan"> Meet WaterBoy, your personal Babylon AI</p>

      <InputBar />

      <Links />
    </>
  );
}

export default App;
