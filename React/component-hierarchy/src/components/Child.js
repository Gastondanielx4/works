import React from "react";

const Child = ({ handleChild }) => {
  const msgHIjo = "Hello From Child";
  return (
    <div>
      <button onClick={() => handleChild(msgHIjo)}>ChangeParentData</button>
    </div>
  );
};

export default Child;
