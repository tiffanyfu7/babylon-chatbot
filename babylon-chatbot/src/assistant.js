import OpenAI from "openai";

const assistant_id = import.meta.env.VITE_OPENAI_ASSISTANT_ID;


const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});




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

async function retrieveThread(myThread) {
  const continueThread = await openai.beta.threads.retrieve(myThread);

  return continueThread;
}

export { retrieveThread };

/*Delete a Thread*/

async function deleteThread(myThread) {
  const threadToBeRemoved = await openai.beta.threads.del(myThread);

  console.log(threadToBeRemoved);
}

export { deleteThread };

/*Create a Message*/
async function createMessage(myThread, message) {
  const threadMessages = await openai.beta.threads.messages.create(myThread, {
    role: "user",
    content: message,
  });

  return threadMessages;
}

export { createMessage };

/*List Messages*/

async function listMessages(myThread) {
  const threadMessages = await openai.beta.threads.messages.list(myThread);

  return threadMessages;
}

export { listMessages };

/* Retrieve a Message */

async function retrieveMessage(myThread, messageID) {
  const message = await openai.beta.threads.messages.retrieve(
    myThread,
    messageID
  );

  return message;
}

export { retrieveMessage };

/*Delete Assistant */

/* Creating a Run */

async function createRun(myThread) {
  const run = await openai.beta.threads.runs.create(myThread, {
    assistant_id: assistant_id});

  return run;
}

export { createRun };

/* Create Response  */


async function createResponse(myThread, myRun){
  let response = await openai.beta.threads.runs.retrieve(myThread, myRun)

  // while(response.status === "queued" || response.status == "in_progress"){
  //   await new Promise((resolve) => setTimeout(resolve, 1000))
  //   response = await openai.beta.threads.runs.retrieve(myThread, myRun)
  // }

  return response;

}

export { createResponse }


/* Get Response */



/* Display OpenAI API Assistant Response */


// if(runID){
//   createResponse(threadID, runID)
//    .then((obj) => console.log(obj))
//    .catch((error) => console.log(error))

//    console.log("this is working")

//   const messageList = listMessages(threadID)
//   .then((obj) => {
//     console.log(obj);
//   })
//   .catch((error) => console.log(error));

//   console.log(messageList.data)

//   const responseMessage = messageList.data
//   .filter((message) => message.id === runID && message.role === "assistant")
//   .pop();

//   console.log(responseMessage);


// }



// }, [runID])
