import React from "react";
import ChildA from "./ChildA";

function Parent() {
  const name = "Om Prakash";

  return (
    <div>
      <ChildA name={name} />
    </div>
  );
}

export default Parent;
