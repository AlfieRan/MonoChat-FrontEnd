import React, { Component, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../api/api_connection";
import { UserInfo } from "../api/types";
// import styles from "./searchBar.module.css";
// interface SearchStateType {
//   query: string;
//   data: UserInfo[];
// }

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const { data, error } = useSWR<UserInfo[]>(
    `http://localhost:8000/search/?q=${query}`,
    fetcher
  );

  const handleInputChange = (val: string) => {
    setQuery(() => val);
  };

  return (
    <div className="SearchBarMain">
      <input
        placeholder="Search for people you know..."
        value={query}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        className="SearchBarInputField"
      />
      {data && (
        <div className="SearchBarResultsField">
          {data.map((v) => (
            <a href={"/users/" + v.id} className="SearchBarResults">
              {v.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
