import React from "react";
import Axios from "axios";
import "./styles.css";

export default function Search({ handleSearch, isDisabled }: any): JSX.Element {
  return (
    <div className="search">
      <input
        className="bar"
        data-testid="searchbar"
        type="search"
        placeholder="Digite o nome do usuário"
        onKeyUp={handleSearch}
        disabled={isDisabled}
      />
    </div>
  );
}
