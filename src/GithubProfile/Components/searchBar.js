import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { getUser, getUserRepos } from "../Redux/actions";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const searchUser = (e) => {
    e.preventDefault();
    dispatch(getUser(searchTerm));
    dispatch(getUserRepos(searchTerm));

    setSearchTerm("");
  };

  return (
    <form className={"searchContainer"} onSubmit={(e) => searchUser(e)}>
      <SearchIcon fontSize="medium" style={{ color: "#fff" }} />

      <input
        className={"searchInput"}
        type="text"
        placeholder={"Search User"}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
}
