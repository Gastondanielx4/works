import React from "react";
import CrudBook from "./CrudBook";
import { SearchBook } from "./SearchBook";

export const MainBooks = () => {
  return (
    <main>
      <SearchBook />
      <CrudBook />
    </main>
  );
};
