import React, { useState } from "react";
import Child from "./Child";

const msgParent = "Hello From Parent";

const Parent = () => {
  const [parentValue, setParentValue] = useState(msgParent);

  const handleChild = (msgHIjo) => {
    if (parentValue === msgParent) {
      setParentValue(msgHIjo);
    } else {
      setParentValue(msgParent);
    }
  };
  return (
    <div>
      <h1>{parentValue}</h1>
      <Child handleChild={handleChild} />
    </div>
  );
};

export default Parent;
