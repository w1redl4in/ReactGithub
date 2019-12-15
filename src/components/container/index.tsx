import React from "react";
import UserInfo from "../user-info";
import Search from "../search";
import Actions from "../actions";
import Repos from "../repos&stars";
import "../search/styles.css";
import "../actions/styles.css";

export default function Container({
  userInfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarreds
}: any): JSX.Element {
  return (
    <div className="app">
      <Search handleSearch={handleSearch} />
      {userInfo && <UserInfo userinfo={userInfo} />}
      {userInfo && <Actions getRepos={getRepos} getStarreds={getStarreds} />}
      {repos.lenght && (
        <Repos className="repos" title="Repositorios" repos={repos} />
      )}
      {starred.lenght && (
        <Repos className="starred" title="Stars" repos={starred} />
      )}
    </div>
  );
}
