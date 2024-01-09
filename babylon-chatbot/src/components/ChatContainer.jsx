import { useEffect, useState } from "react";
import { MessageChannel } from "./MessageChannel.jsx";
import {
  createThread,
  createMessage,
  listMessages,
  createRun,
  createResponse,
} from "../assistant.js";

export const ChatContainer = () => {
  const [submittedPrompt, setSubmittedPrompt] = useState("");
  const [threadID, setThreadID] = useState("");
  const [messageList, setMessageList] = useState([""]);
  const [assistantResponse, setAssistantResponse] = useState("");

  useEffect(() => {
    createThread()
      .then((obj) => {
        setThreadID(String(obj.id));
      })
      .catch((error) => console.log(error));
  }, []);

   async function handleSubmit(prompt){
    prompt.preventDefault(); // prevents the form from autosubmitting, if you see a question mark at the https part then it is not processing the code
    const inputOfUser = prompt.target.userInput.value;
    setSubmittedPrompt(inputOfUser);
    setMessageList([...messageList, submittedPrompt]);
    console.log(messageList);

    const message = await createMessage(threadID, inputOfUser)

    const run = await createRun(threadID)

    const response = await createResponse(threadID, run.id)

    const messages = await listMessages(threadID)

    console.log(messages)

    let responseMessage = messages.filter((obj) => obj.run_id === run.id && obj.role === "assistant")
    .pop();

    responseMessage = responseMessage.content[0]["text"].value

    setAssistantResponse(responseMessage)

   }
  return (
    <div>
      <div>
        {messageList.map((message, index) => (
          <MessageChannel
            key={index}
            message={message}
            userOrNot={index % 2 === 0}
          />
          )

          


        )}

      {assistantResponse && (
        <MessageChannel message={assistantResponse} userOrNot={false} />
      )}  
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
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
};
