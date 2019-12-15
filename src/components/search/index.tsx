import React from "react";
import Axios from "axios";

export default function Search({ userinfo }: any): JSX.Element {
  let value: any = "";

  return (
    <div className="search">
      <input
        className="bar"
        type="search"
        placeholder="Digite o nome do usuário"
        onBlur={e => {
          value = e.target.value;
        }}
      />
      <input
        className="button"
        type="submit"
        onClick={() => {
          Axios.get(`https://api.github.com/users/${value}`).then(result => {});
        }}
      />
    </div>
  );
}
