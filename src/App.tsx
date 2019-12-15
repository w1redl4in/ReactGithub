import React, { useState } from "react";
import Container from "./components/container";
import Axios from "axios";

const App: React.FC = () => {
  const [userInfo, setUserInfo] = useState();
  const [repos, setRepos] = useState([{}]);
  const [starred, setStarred] = useState([{}]);

  function handleSearch(e: any) {
    let value = e.currentTarget.value;
    const keyCode = e.which || e.keyCode;
    const Enter = 13;
    if (keyCode === Enter) {
      Axios.get(`https://api.github.com/users/${value}`)
        .then(result => {
          setUserInfo({
            username: result.data.name,
            photo: result.data.avatar_url,
            login: result.data.login,
            repos: result.data.public_repos,
            following: result.data.following,
            followers: result.data.followers
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  function getRepos() {
    Axios.get(`https://api.github.com/users/${userInfo.login}/repos`).then(
      result => {
        setRepos([
          {
            name: result.data[0].name,
            link: result.data[0].html_url
          }
        ]);
        console.log(repos);
      }
    );
  }

  function getStarreds() {
    Axios.get(`https://api.github.com/users/${userInfo.login}/starred`).then(
      result => {
        setStarred([
          {
            name: result.data[0].name,
            link: result.data[0].html_url
          }
        ]);
        console.log(repos);
      }
    );
  }

  return (
    <Container
      userInfo={userInfo}
      repos={repos}
      starred={starred}
      handleSearch={handleSearch}
      getRepos={getRepos}
      getStarreds={getStarreds}
    />
  );
};

export default App;
