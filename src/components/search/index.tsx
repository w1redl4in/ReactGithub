import React from "react";
import Axios from "axios";

export default function Search({ handleSearch }: any): JSX.Element {
  return (
    <div className="search">
      <input
        className="bar"
        type="search"
        placeholder="Digite o nome do usuário"
        onKeyUp={handleSearch}
      />
    </div>
  );
}
