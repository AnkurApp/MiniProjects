import { Card } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

export default function UserDetails() {
  const { user } = useSelector((state) => state.userReducer);
  const { repos } = useSelector((state) => state.repoReducer);

  return (
    <Card className={"userCardContainer"}>
      <img src={user.avatar_url} alt={user.name} />
      <div>
        <div className={"userInfo"}>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>

        <ul>
          <li>{`Followers: ${user.followers}`}</li>
          <li>{`Following: ${user.following}`}</li>
          <li>{`Repos: ${user.public_repos}`}</li>
        </ul>

        <div className={"userRepo"}>
          {repos.map((repo, index) => {
            return (
              <a href={repo.html_url} key={index}>
                {repo.name}
              </a>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
