import React from "react";
import "./styles.css";
export default function Repos({ className, title, repos }: any): JSX.Element {
  return (
    <div className="repos">
      <h2>{title}</h2>
      <ul>
        {repos.map((repo: any, index: any) => (
          <li key={index}>
            <a href={repo.link}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
