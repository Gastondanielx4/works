import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CardBook from "./CardBook";

const RenderBooks = () => {
  const { booksFilter, booksApi } = useContext(CrudContext);
  return (
    <div className="grid-1-4">
      {booksFilter.length > 0
        ? booksFilter.map((el) => <CardBook key={el.id} el={el} />)
        : booksApi.map((el) => <CardBook key={el.id} el={el} />)}
    </div>
  );
};

export default RenderBooks;
