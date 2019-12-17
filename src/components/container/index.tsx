import React from "react";
import UserInfo from "../user-info";
import Search from "../search";
import Actions from "../actions";
import Repos from "../repos&stars";
import LoadingBar from "../loadingbar";

export default function Container({
  userInfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarreds,
  isFetching
}: any): JSX.Element {
  return (
    <div className="app">
      <Search isDisabled={isFetching} handleSearch={handleSearch} />
      {isFetching && <LoadingBar />}
      {!!userInfo && <UserInfo userinfo={userInfo} />}
      {userInfo && <Actions getRepos={getRepos} getStarreds={getStarreds} />}
      {repos && <Repos className="repos" title="Repositorios" repos={repos} />}
      {starred && <Repos className="starred" title="Stars" repos={starred} />}
    </div>
  );
}
