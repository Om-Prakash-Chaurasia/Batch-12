// Prop Drilling :-

// import React, { createContext } from "react";
// import ChildC from "./ChildC";

// function ChildB({ name }) {
//   return (
//     <div>
//       <ChildC name={name} />
//     </div>
//   );
// }

// export default ChildB;

// Context API :-

import ChildC from "./ChildC";

function ChildB() {
  return (
    <div>
      <ChildC />
    </div>
  );
}

export default ChildB;
