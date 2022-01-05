import React, { Component, useState, useEffect } from "react";
import * as env from "../env";
import SearchBar from "./searchBar";
import { Link, Flex, Spacer, Center } from "@chakra-ui/react";
const NavBar = () => {
  let mainURL: string = env.URL;

  return (
    <Flex w={"100%"} h={"10%"} fontSize={[30]} bg={"#191919"} color={"#FFF"}>
      <Center w={"15%"} align={"left"}>
        <Link href={mainURL + "donate"} _hover={{ color: "#4477bb" }}>
          Donate
        </Link>
      </Center>
      <Spacer />
      <Center>
        <Link href={mainURL} _hover={{ color: "#4477bb" }} hidden={false}>
          MonoChat
        </Link>
      </Center>
      <SearchBar height={5} width={6} hidden={true} />
      <Spacer />
      <Center w={"15%"} align={"right"}>
        <Link href={mainURL + "signin"} _hover={{ color: "#4477bb" }}>
          Sign In
        </Link>
      </Center>
    </Flex>
  );
};

export default NavBar;
