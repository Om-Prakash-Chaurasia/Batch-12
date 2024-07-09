import React from "react";
// import Greetings from "./components/Greetings";
// import Counter from "./components/Counter";
import JsxExplanation from "./components/JsxExplanation";
import Props from "./components/Props";
import EventHandling from "./components/EventHandling";
import ConditionalRendering from "./components/ConditionalRendering";
import Mailbox from "./components/ConditionalRendering";
import Greetings from "./components/ConditionalRendering";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import Timer from "./components/Hooks";
import DataFetcher from "./components/Hooks";
import Counter from "./components/Hooks";
import Parent from "./components/Parent";

function App() {
  // const messages = ["Messsage 1", "Message 2", "Message 3"];
  return (
    <div>
      {/* <Greetings name="Om Prakash" /> */}
      {/* <Counter /> */}
      {/* <JsxExplanation /> */}
      {/* <Props name="Deepak" age="25" /> */}
      {/* <EventHandling /> */}
      {/* <ConditionalRendering letMeCheck={true} isLoggedIn={true} /> */}
      {/* <Mailbox unreadMessages={messages} /> */}
      {/* <Greetings isLoggedIn={true} /> */}
      {/* <ControlledForm /> */}
      {/* <UncontrolledForm /> */}
      {/* <Counter /> */}
      {/* <Timer /> */}
      {/* <DataFetcher /> */}
      <Parent />
    </div>
  );
}

export default App;
