import React, { Component, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../api/api_connection";
import { UserInfo } from "../api/types";
import { Box, Input, Link } from "@chakra-ui/react";
import * as env from "../env";

interface SearchBarProps {
  width?: number;
  height?: number;
  hidden?: boolean;
}

const SearchBar = (props: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");
  const { data, error } = useSWR<UserInfo[]>(
    `${env.ApiURL}search/?q=${query}`,
    fetcher
  );
  if (!props.hidden) {
    const handleInputChange = (val: string) => {
      setQuery(() => val);
    };

    return (
      //  TODO Need to figure out how to make searches work with weird capitlisation
      <Box p={2}>
        <Input
          placeholder="Search for people know..."
          value={query}
          onChange={e => {
            handleInputChange(e.target.value);
          }}
          /* styling stuff */
          /*  TODO Add varied sizes, not just the defualt one */
          marginTop={[-10]}
          height={[(props.height || 10) * 7.5]}
          width={[(props.width || 10) * 75]}
          fontSize={[(props.height || 10) * 3.5]}
          borderRadius={[(props.height || 10) * 5]}
        />
        {data && (
          <Box
            marginLeft={(props.width || 10) * 10}
            fontSize={[(props.height || 10) * 4]}
            border={(props.width || 10) * 5}
            borderColor={"#444"}
          >
            {data.map(v => (
              <Link href={"/users/" + v.id}>{v.name}</Link>
            ))}
          </Box>
        )}
      </Box>
    );
  } else {
    return null;
  }
};

export default SearchBar;
