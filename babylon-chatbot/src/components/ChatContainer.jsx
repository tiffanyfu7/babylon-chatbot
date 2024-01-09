import { useEffect, useState } from "react";
import { MessageChannel } from "./MessageChannel.jsx"
import { createThread, createMessage, listMessages, createRun, createResponse } from "../assistant.js";

export const ChatContainer = () => {
  let [submittedPrompt, setSubmittedPrompt] = useState("");
  const [threadID, setThreadID] = useState("");
  const [runID, setRunID] = useState("");
  const [response, setResponse] = useState(null);
  const [assistantResponse, setAssistantResponse] = useState("");
  const [messageListData, setMessageListData] = useState([{}]);
  const [messageList, setMessageList] = useState([""]);



  const handleSubmit = (prompt) => {
    prompt.preventDefault(); // prevents the form from autosubmitting, if you see a question mark at the https part then it is not processing the code
    let inputOfUser = prompt.target.userInput.value;
    setSubmittedPrompt(inputOfUser);
    setMessageList([...messageList, submittedPrompt]);

    console.log(messageList);
  };


  useEffect(() => {
    createThread(submittedPrompt !== null)
      .then((obj) => { setThreadID(String(obj.id)) })
      .catch((error) => console.log(error));
  }, [submittedPrompt]);

  useEffect(() => {
    if (threadID) {
      createMessage(threadID, submittedPrompt)
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
      if(responseMessage){
        setMessageList([...messageList, (responseMessage.content[0]["text"].value)]);
      }
  }
}, [messageListData]);


 
  return (
    <div>
      <div>
        {messageList.map((message, index) => {
          <MessageChannel key={index} message={message} userOrNot={index%2 === 0}/>
        })}
      </div>
      <form
        className="box"
        method="post"
        onSubmit={(prompt) => handleSubmit(prompt)}
      >
          <input
            className="inputbox"
            type="text"
            name="userInput"
            placeholder="Enter prompt here"
          />
          <button className="submitButton" >Submit</button>
      </form>

      
    </div>
  );
};
