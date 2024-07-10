// Prop Drilling :-

// import React from "react";

// function ChildC({ name }) {
//   return (
//     <div>
//       <h1>Component C displaying {name}</h1>
//     </div>
//   );
// }

// export default ChildC;

// Context API :-

// Note :- Inside the consumer we can only write a function.

// import React from "react";
// import { data } from "./Parent";

// function ChildC() {
//   return (
//     <div>
//       <data.Consumer>
//         {(name) => {
//           return <h1>My name is {name}.</h1>;
//         }}
//       </data.Consumer>
//     </div>
//   );
// }

// export default ChildC;

// Passing multiple props :-

import React from "react";
import { data, data1 } from "./Parent";

function ChildC() {
  return (
    <div>
      <data.Consumer>
        {(name) => {
          return (
            <data1.Consumer>
              {(age) => {
                return (
                  <h1>
                    My name is {name} and I am {age} years old.
                  </h1>
                );
              }}
            </data1.Consumer>
          );
        }}
      </data.Consumer>
    </div>
  );
}

export default ChildC;
