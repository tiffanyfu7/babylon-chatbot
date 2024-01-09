import { useState } from "react";

export const InputBar = () => {
  const [submittedPrompt, setSubmittedPrompt] = useState("");

  const handleSubmit = (prompt) => {
    prompt.preventDefault(); // prevents the form from autosubmitting, if you see a question mark at the https part then it is not processing the code
    console.log(prompt.target.userInput.value);
    setSubmittedPrompt(prompt.target.userInput.value);
    prompt.target.userInput.value = "";
  };

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
      {/* Returns the saved prompt onto the screen, now taking this we should input it into a different component for analysis */}
      {/* <AssistantProcessing message={submittedPrompt} /> */}{" "}
      {/* Potential next steps */}
    </>
  );
};
