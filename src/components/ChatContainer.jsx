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
  //current prompt being sent
  const [currentPrompt, setCurrentPrompt] = useState("none");
  const [threadID, setThreadID] = useState("");
  //messageList = [{role: , text: }...]
  const [messageList, setMessageList] = useState([{}]);

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
   }
  return (
    <div>
      <div class="message-box">
        {/* Display Previously sent messages saved to messageList */}
          { messageList.map((message_obj, index) => (
            <MessageChannel
              key={index}
              message={message_obj.text}
              role={message_obj.role} /> )
        )}

        {/* Display Current Prompt */}
        {currentPrompt !== "none" &&
          <div>
            <MessageChannel
              message={currentPrompt}
              role={"user"} />
            <MessageChannel
              message="Fetching a Response..."
              role={"assistant"} />
          </div>
        }
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
          placeholder="Type Your Message..."
        />
        {currentPrompt === "none" &&
          <button type="submit" className="submitButton">
            Submit
          </button>
        }
      </form>
    </div>
  );
};
