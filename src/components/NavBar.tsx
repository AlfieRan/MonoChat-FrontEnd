import React, { Component, useState, useEffect } from "react";
import * as env from "../env";
import SearchBar from "./searchBar";
import { Link, Flex, Spacer, Center } from "@chakra-ui/react";
const NavBar = () => {
  let mainURL: string = env.URL;

  return (
    <Center
      w={"full"}
      p={1}
      fontSize={[14, 20, 25, 33, 42, 52]}
      bg={"DarkGrey"}
      color={"#FFF"}
    >
      <Flex px={5}>
        <Link href={mainURL + "donate"} _hover={{ color: "#4477bb" }}>
          Donate
        </Link>
      </Flex>
      <Spacer />
      <Flex px={5}>
        <Link href={mainURL} _hover={{ color: "#4477bb" }} hidden={false}>
          MonoChat
        </Link>
      </Flex>
      <Spacer />
      <Flex px={5}>
        <Link href={mainURL + "signin"} _hover={{ color: "#4477bb" }}>
          SignIn
        </Link>
      </Flex>
    </Center>
  );
};

export default NavBar;
