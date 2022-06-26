import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parentValue, setParentValue] = useState("Hello From Parent");

  const handleChild = (msgHIjo, msgParent) => {
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
