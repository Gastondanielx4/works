import React from "react";
import { useTodos } from "../hooks/useTools";

const Title = () => {
  const { pendingTodos } = useTodos();

  return (
    <>
      <h1>Todos: {pendingTodos}</h1>
    </>
  );
};

export default Title;
