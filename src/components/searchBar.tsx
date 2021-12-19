import React, { Component, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../api/api_connection";
import { UserInfo } from "../api/types";
import { Box, Input, Link } from "@chakra-ui/react";
// import styles from "./searchBar.module.css";

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
    <Box>
      <Input
        placeholder="Search for people you know..."
        value={query}
        onChange={e => {
          handleInputChange(e.target.value);
        }}
        /* styling stuff */
        /*  TODO Add varied sizes, not just the defualt one */
        marginTop={[-10]}
        height={[75]}
        width={[750]}
        fontSize={[35]}
        borderRadius={[50]}
      />
      {data && (
        <Box marginLeft={10} fontSize={[40]} border={5} borderColor={"#444"}>
          {data.map(v => (
            <Link href={"/users/" + v.id}>{v.name}</Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
