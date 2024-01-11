# :droplet: WaterBoy, An AI-Powered ChatBot for Babylon Micro-Farms :seedling:

## Description:
This is a ChatBot Application using OpenAI's Assistants API and was programmed using React and styled with CSS. 

The App component consists of a Header, ChatContainer, Message(s), and Links component. 

<img width="887" alt="Screen Shot 2024-01-10 at 2 18 26 PM" src="https://github.com/tiffanyfu7/babylon-microfarms-chatbot/assets/71473099/607acc80-3325-4d81-923f-ece5e9277b7c">

Babylon Micro-Farms was founded Alexander Olesen and Graham Smith with the goal of bringing the benefits of sustainable hydroponic farming to anyone who needs it.

This ChatBot serves as the first line of customer service for Babylon's expanding array of products. 

## How to Install and Run:
##### Prequisites: Ensure You have Node.js and npm installed on your system (check using `npm -v` or install [here](https://nodejs.org/en/download))
1. Clone the repo using `git clone [THIS_GITHUB_URL]` and then navigate into the project directory using `cd babylon-microfarms-chatbot` 
2. Install dependencies from the package-lock-json using `npm install`
3. Run the app using `npm run dev` to launch in your browser using Vite

##### Handling the API Key:
To correctly build an assistant, simply set up an .env file in your project's root directory with an OPENAI API Key and assistant ID.

VITE_OPENAI_API_KEY = "[api_key]"
VITE_OPENAI_ASSISTANT_ID = "[assistant_id]"

## How to Use:
__Starting WaterBoy:__ Upon launching, the chatbot interface is immediately accesible<br>

__Interacting with WaterBoy:__ Type your micro-farming questions in the chat box and press the Submit button or enter. Upon processing, WaterBoy will respond with relevant information, tips, and actions.<br>

__Additional Features:__ Explore the various functionalities such as the text-to-speech feature or the assistant's response copy feature

## Credits:
Built during Forge's SWE Launch Crash Course Jan 2024 by Tiffany Fu, Samuel Glasscock, and Rishi Sarraff. Supervised by Byron Richards and Simon Anderson.