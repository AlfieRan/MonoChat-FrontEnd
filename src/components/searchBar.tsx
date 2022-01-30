import React, { Component, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { UserInfo } from "../utils/types";
import {
  Box,
  Input,
  Link,
  Flex,
  InputGroup,
  InputLeftElement,
  InputLeftAddon,
  Center
} from "@chakra-ui/react";
import * as env from "../env";
import { Search2Icon } from "@chakra-ui/icons";

interface SearchBarProps {
  hidden?: boolean;
}

// TODO Update things so no vulnerabilities

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
      <Flex flexDir={"column"}>
        <InputGroup textAlign={"left"}>
          <InputLeftAddon
            children={<Search2Icon boxSize={"2vw"} />}
            borderRadius={999}
            bg={"LightBlue"}
            pr={3}
            mr={0}
            py={4}
            h={"5vw"}
          />
          <Input
            w={"60vw"}
            h={"5vw"}
            py={4}
            textAlign={"left"}
            noOfLines={1}
            placeholder={"Search for people you know..."}
            value={query}
            onChange={e => {
              handleInputChange(e.target.value);
            }}
            fontSize={[14, 20, 25, 33, 42, 52]}
            borderRadius={999}
          />
        </InputGroup>
        <Center>
          {data && (
            <Flex
              fontSize={[14, 20, 25, 33, 42, 52]}
              borderColor={"#444"}
              flexDir={"column"}
            >
              {data.map(v => (
                <Link href={"/users?id=" + v.id}>{v.name}</Link>
              ))}
            </Flex>
          )}
        </Center>
      </Flex>
    );
  } else {
    return null;
  }
};

export default SearchBar;
