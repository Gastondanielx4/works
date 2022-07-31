import React from "react";
import RenderBooks from "./RenderBooks";
import { SearchBook } from "./SearchBook";

export const MainBooks = () => {
  return (
    <main>
      <SearchBook />
      <RenderBooks />
    </main>
  );
};
