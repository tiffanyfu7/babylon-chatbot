import { useEffect, useState } from "react";
import { createThread, createMessage, listMessages, createRun, createResponse } from ".././assistant.js";

export const InputBar = () => {
  const [submittedPrompt, setSubmittedPrompt] = useState("");
  const [threadID, setThreadID] = useState("");
  const [runID, setRunID] = useState("");
  const [response, setResponse] = useState(null);
  const [assistantResponse, setAssistantResponse] = useState("");
  const [messageListData, setMessageListData] = useState([{}]);

  const handleSubmit = (prompt) => {
    prompt.preventDefault(); // prevents the form from autosubmitting, if you see a question mark at the https part then it is not processing the code
    console.log(prompt.target.userInput.value);
    setSubmittedPrompt(prompt.target.userInput.value);
    prompt.target.userInput.value = "";
  };

  useEffect(() => {
    createThread(submittedPrompt !== "")
      .then((obj) => { setThreadID(String(obj.id)) })
      .catch((error) => console.log(error));
  }, [submittedPrompt]);

  useEffect(() => {
    if (threadID !== "") {
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
      if(responseMessage) setAssistantResponse(responseMessage.content[0]["text"].value);
    }
  }, [messageListData]);

  return (
    <>
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
          <button className="submitButton">Submit</button>
      </form>
      <h3>{submittedPrompt}</h3>{" "}
      <h3>{assistantResponse}</h3>
      {/* Returns the saved prompt onto the screen, now taking this we should input it into a different component for analysis */}
      {/* <AssistantProcessing message={submittedPrompt} /> */}{" "}
      {/* Potential next steps */}
    </>
  );
};
