/* import { useContext } from "react";
import { TodoContext } from "../context/TodoContext"; */
import { Todo } from "../interfaces/interfaces";
import { useTodos } from "../hooks/useTools";

interface props {
  todo: Todo;
}

const TodoItem = ({ todo }: props) => {
  //const { toggleTodo } = useContext(TodoContext);

  const { toggleTodo } = useTodos();

  /*   const handleDbClick = () => {
    toggleTodo(todo.id);
  }; */
  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      onDoubleClick={() => toggleTodo(todo.id)}
    >
      {todo.desc}
    </li>
  );
};

export default TodoItem;
