import React from "react";

const Child = (props) => {
  return (
    <div>
      <button onClick={props.handleChild}>ChangeParentData</button>
    </div>
  );
};

export default Child;
