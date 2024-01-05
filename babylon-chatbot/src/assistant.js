import OpenAI from "openai";
const openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

/*Retrieve Assistant*/
async function retrieveAssistant() {
  const myAssistant = await openai.beta.assistants.retrieve(
    import.meta.env.VITE_OPENAI_ASSISTANT_ID
  );

  console.log(myAssistant.name);
}

// {
//   "id": "asst_abc123",
//   "object": "assistant",
//   "created_at": 1699009709,
//   "name": "HR Helper",
//   "description": null,
//   "model": "gpt-4",
//   "instructions": "You are an HR bot, and you have access to files to answer employee questions about company policies.",
//   "tools": [
//     {
//       "type": "retrieval"
//     }
//   ],
//   "file_ids": [
//     "file-abc123"
//   ],
//   "metadata": {}
// }

export { retrieveAssistant };

/*Create a Thread*/
async function createThread() {
  const newThread = await openai.beta.threads.create();

  return newThread;
}
// returns 
// {
//   "id": "thread_abc123",
//   "object": "thread",
//   "created_at": 1699012949,
//   "metadata": {}
// }
export { createThread };

/*Retrieve a Thread*/

 async function retrieveThread(myThread){
  const continueThread = await openai.beta.threads.retrieve(
    {myThread}
  );

  return continueThread;

}

 export { retrieveThread };

  
/*Delete a Thread*/

 async function deleteThread(myThread){
  const threadToBeRemoved = await openai.beta.threads.del({myThread});

  console.log(threadToBeRemoved);
}

export { deleteThread }
  
/*Create a Message*/
async function createMessage({ myThread, message }) {
  const threadMessages = await openai.beta.threads.messages.create(
    { myThread },
    { role: "user", content: { message } }
  );

  return threadMessages;
}

export { createMessage };


/*List Messages*/
  
/*Delete Assistant */