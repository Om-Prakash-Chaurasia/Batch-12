// Prop Drilling :-

// import React from "react";
// import ChildB from "./ChildB";

// function ChildA({ name }) {
//   return (
//     <div>
//       <ChildB name={name} />
//     </div>
//   );
// }

// export default ChildA;

// Context API :-

import React from "react";
import ChildB from "./ChildB";

function ChildA() {
  return (
    <div>
      <ChildB />
    </div>
  );
}

export default ChildA;
