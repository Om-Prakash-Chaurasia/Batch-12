// Prop Drilling :-

// import React from "react";
// import ChildA from "./ChildA";

// function Parent() {
//   const name = "Om Prakash";

//   return (
//     <div>
//       <ChildA name={name} />
//     </div>
//   );
// }

// export default Parent;

// Context API :- create, Provider, and Consumer.

// import React, { createContext } from "react";
// import ChildA from "./ChildA";

// const data = createContext();

// function Parent() {
//   const name = "Om Prakash";

//   return (
//     <div>
//       <data.Provider value={name}>
//         <ChildA />
//       </data.Provider>
//     </div>
//   );
// }

// export default Parent;
// export { data };

// Is context API problematic? => Yes, it is. Lets see how.

import React, { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext();
const data1 = createContext();

function Parent() {
  const name = "Om Prakash";
  const age = 24;

  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default Parent;
export { data, data1 };

// // useContext Hook :- create, Provider, and useContext hook.
