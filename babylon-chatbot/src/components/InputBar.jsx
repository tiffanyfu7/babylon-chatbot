import {useState} from 'react'
import {AssistantProcessing} from 'react'

export const InputBar = ({message}) => {
  const [submit, setSubmit] = useState(true);
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    return(
    <AssistantProcessing message={event}/>
    )
  }

  return (

    <form onSubmit={handleSubmit}>
      <label>Enter prompt:
        <input 
          type="text" 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  
  );
};
