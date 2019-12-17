import React, { useState } from "react";
import Container from "./components/container";
import Axios from "axios";

const App: React.FC = () => {
  const [userInfo, setUserInfo] = useState();
  const [repos, setRepos] = useState([{}]);
  const [starred, setStarred] = useState([{}]);
  const [fetching, isFetching] = useState(false);

  async function handleSearch(e: any) {
    const currentTarget = e.currentTarget;
    let value = e.currentTarget.value;
    const keyCode = e.which || e.keyCode;
    const Enter = 13;
    if (keyCode === Enter) {
      isFetching(true);
      currentTarget.disabled = true;
      const result = await Axios.get(`https://api.github.com/users/${value}`);
      try {
        setUserInfo({
          username: result.data.name,
          photo: result.data.avatar_url,
          login: result.data.login,
          repos: result.data.public_repos,
          following: result.data.following,
          followers: result.data.followers
        });
      } catch (err) {
        isFetching(false);
        currentTarget.disabled = false;
        console.log(err);
      } finally {
        isFetching(false);
        currentTarget.disabled = false;
      }
    }
  }

  async function getRepos() {
    const result = await Axios.get(
      `https://api.github.com/users/${userInfo.login}/repos`
    );
    setRepos([
      {
        name: result.data[0].name,
        link: result.data[0].html_url
      }
    ]);
  }

  async function getStarreds() {
    const result = await Axios.get(
      `https://api.github.com/users/${userInfo.login}/starred`
    );
    console.log(result);

    setStarred([
      {
        name: result.data[0].name,
        link: result.data[0].html_url
      }
    ]);
    console.log(starred);
  }

  return (
    <Container
      userInfo={userInfo}
      repos={repos}
      starred={starred}
      handleSearch={handleSearch}
      getRepos={getRepos}
      getStarreds={getStarreds}
      isFetching={fetching}
    />
  );
};

export default App;
