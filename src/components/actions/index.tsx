import React from "react";

export default function Actions({ getRepos, getStarreds }: any): JSX.Element {
  return (
    <div className="actions">
      <button onClick={getRepos}>Ver Repositorios</button>
      <button onClick={getStarreds}>Ver Favoritos</button>
    </div>
  );
}
