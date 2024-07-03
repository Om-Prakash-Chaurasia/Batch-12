import React from "react";

function Props(props) {
  return (
    <div>
      <h1>
        Hello, {props.name} you are {props.age} years old.
      </h1>
    </div>
  );
}

// Destructuring for Props :-

// function Props({ name, age }) {
//   return (
//     <div>
//       <h1>
//         Hello, {name} you are {age} years old.
//       </h1>
//     </div>
//   );
// }

export default Props;
