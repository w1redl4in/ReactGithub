import React from "react";
import "../user-info/styles.css";

export default function UserInfo({ userinfo }: any): JSX.Element {
  return (
    <div className="user-info">
      <img src={userinfo.photo} alt="" />
      <h1>
        <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
      </h1>

      <div className="pos-info">
        <ul>
          <li>Repositorios: {userinfo.repos}</li>
          <li>Followers: {userinfo.followers}</li>
          <li>Following: {userinfo.following}</li>
        </ul>
      </div>
    </div>
  );
}
