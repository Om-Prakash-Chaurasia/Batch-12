import React from "react";
import Greetings from "./components/Greetings";
import Counter from "./components/Counter";
import JsxExplanation from "./components/JsxExplanation";

function App() {
  return (
    <div>
      <Greetings name="Om Prakash" />
      <Counter />
      <JsxExplanation />
    </div>
  );
}

export default App;
