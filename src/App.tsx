import React, { useState } from "react";
import Container from "./components/container";

const App: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    username: "Felipe Austríaco",
    photo: "https://avatars3.githubusercontent.com/u/43390533?v=4",
    login: "w1redl4in",
    repos: 19,
    following: 5,
    followers: 5
  });
  const [repos, setRepos] = useState([
    {
      name: "repos",
      link: "#"
    }
  ]);
  const [starred, setStarred] = useState([
    {
      name: "stars",
      link: "#"
    }
  ]);

  function Axios(event: any) {
    const value = event.target.value;
  }
  return <Container userInfo={userInfo} repos={repos} starred={starred} />;
};

export default App;
