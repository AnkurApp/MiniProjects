import React from "react";
import { useSelector } from "react-redux";
import UserDetails from "./Components/displayUser";
import SearchBar from "./Components/searchBar";
import "./style.css";

export default function GithubUsers() {
  const { user } = useSelector((state) => state.userReducer);
  console.log(user);

  return (
    <div className={"mainContainer"}>
      <h1 className={"mainHeading"}>{"Look for User"}</h1>
      <SearchBar />
      {Object.keys(user).length ? <UserDetails /> : null}
    </div>
  );
}
