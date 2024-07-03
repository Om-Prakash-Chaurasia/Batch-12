import React from "react";
import Greetings from "./components/Greetings";
import Counter from "./components/Counter";
import JsxExplanation from "./components/JsxExplanation";
import Props from "./components/Props";

function App() {
  return (
    <div>
      {/* <Greetings name="Om Prakash" />
      <Counter />
      <JsxExplanation /> */}
      <Props name="Deepak" age="25" />
    </div>
  );
}

export default App;
