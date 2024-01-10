import { useEffect, useState } from "react";
import { Message } from "./Message.jsx";
import {
  createThread,
  createMessage,
  listMessages,
  createRun,
  createResponse,
} from "../assistant.js";

export const ChatContainer = () => {
  const [currentPrompt, setCurrentPrompt] = useState("none");
  const [threadID, setThreadID] = useState("");
  //messageList = [{role: , text: }...]
  const [messageList, setMessageList] = useState([{}]);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);

  useEffect(() => {
    createThread()
      .then((obj) => {
        setThreadID(String(obj.id));
      })
      .catch((error) => console.log(error));
  }, []);

  async function handleSubmit(prompt) {
    prompt.preventDefault(); // prevents the form from autosubmitting, if you see a question mark at the https part then it is not processing the code
    const inputOfUser = prompt.target.userInput.value;
    setCurrentPrompt(inputOfUser);
    prompt.target.userInput.value = "";
    setIsButtonEnabled(false);

    const message = await createMessage(threadID, inputOfUser);

    const run = await createRun(threadID);

    const response = await createResponse(threadID, run.id);

    const messages = await listMessages(threadID);

    let responseMessage = messages.filter((obj) => obj.run_id === run.id && obj.role === "assistant")
    .pop();

    responseMessage = responseMessage.content[0]["text"].value;

    // excludes the "" source from response
    // const regex = /【\d†source】/g;
    const regex = /【\d+†source】/g;
    responseMessage = responseMessage.replace(regex, '');

    setMessageList([...messageList, { role: "user", text: inputOfUser }, { role: "assistant", text: responseMessage }])

    console.log(messageList);
    setCurrentPrompt("none");
    setIsButtonEnabled(true);
   }
  return (
    <div>
      <div className="masked-overflow" id="messageBox">
        {/* Display Previously sent messages saved to messageList */}
          { messageList.map((message_obj, index) => (
            <Message
              key={index}
              message={message_obj.text}
              role={message_obj.role} /> )
        )}

        {/* Display Current Prompt */}
        {currentPrompt !== "none" &&
          <div>
            <Message
              message={currentPrompt}
              role={"user"} />
            <Message
                message="loading" // direct inject message to trigger Message to use animation
                role={"assistant"} /> 
          </div>
        }
        <div id="anchor"></div>
      </div>
      
      <form
        className="box"
        method="post"
        onSubmit={(prompt) => handleSubmit(prompt)}
      >
        <div className="input-container">
        <input
          className="inputbox"
          type="text"
          name="userInput"
          placeholder="Type Your Message..."
        />
        {/* handle selecting the CSS state of submit button */}
          <button type="submit" className= {`submitButton ${!isButtonEnabled ? 'disabledButton' : ''}`} disabled={!isButtonEnabled}> 
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};