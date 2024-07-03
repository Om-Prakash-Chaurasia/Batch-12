import React from "react";

// function PropStates(props) {
//   return (
//     <div>
//       <h1>
// Hello, {props.name} you are {props.age} years old.
//       </h1>
//     </div>
//   );
// }

// Destructuring for Props :-

function PropStates({ name, age }) {
  return (
    <div>
      <h1>
        Hello, {name} you are {age} years old.
      </h1>
    </div>
  );
}

export default PropStates;
