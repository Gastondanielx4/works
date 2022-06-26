import React from "react";

const Child = ({ handleChild }) => {
  const msgParent = "Hello From Parent",
    msgHIjo = "Hello From Child";
  return (
    <div>
      <button onClick={() => handleChild(msgHIjo, msgParent)}>
        ChangeParentData
      </button>
    </div>
  );
};

export default Child;
