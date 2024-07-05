import React from "react";
// import Greetings from "./components/Greetings";
import Counter from "./components/Counter";
import JsxExplanation from "./components/JsxExplanation";
import Props from "./components/Props";
import EventHandling from "./components/EventHandling";
import ConditionalRendering from "./components/ConditionalRendering";
import Mailbox from "./components/ConditionalRendering";
import Greetings from "./components/ConditionalRendering";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";

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
      <UncontrolledForm />
    </div>
  );
}

export default App;
