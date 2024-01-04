import { useState } from "react";
import "./App.css";
import { createAssistant } from "./assistant.js";
import { InputBar } from "./components/InputBar.jsx";

function App() {
  console.log(import.meta.env.VITE_OPENAI_API_KEY);
  createAssistant();

  return (
    <>
      <h1> WaterBoy ChatBot</h1>
      <p> Meet WaterBoy your personal Babylon AI</p>
      
      <InputBar message={"Hello World"}/>
      
    </>
  );
}

export default App;
