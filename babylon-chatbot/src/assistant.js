import OpenAI from "openai";
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
// returns
// {
//   "id": "thread_abc123",
//   "object": "thread",
//   "created_at": 1699012949,
//   "metadata": {}
// }

/*Retrieve a Thread*/

/*Delete a Thread*/

/*Create a Message*/

/*List Messages*/

/*Delete Assistant */
