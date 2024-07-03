import React from "react";

// OnClick event :-
// function EventHandling() {
//   function handleClick() {
//     alert("Button was clicked");
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// InputChange event :-

function EventHandling() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return <input type="text" onChange={handleChange} placeholder="Input box" />;
}

export default EventHandling;
