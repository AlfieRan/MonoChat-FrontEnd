import React from "react";
import { UserInfo } from "../api/types";

import { Box, Text, Heading } from "@chakra-ui/react";

import SearchBar from "../components/searchBar";
import NavBar from "../components/NavBar";

function App() {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDir="column"
      alignItems="center"
      color="white"
      fontFamily={
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;'
      }
    >
      <NavBar />
      <Heading
        as="h1"
        fontSize={[50, 75, 100, 150, 200, 300, 400, 500]}
        fontWeight={5}
        marginTop={20}
      >
        MonoChat
      </Heading>
      <Text
        textAlign={"center"}
        fontSize={[14, 20, 25, 33, 42, 52]}
        marginTop={[-2, -6, -7, -10, -13, -16]}
        marginBottom={[2, 7, 8, 12, 14, 20]}
      >
        Find the People you know by name, and chat to them!
      </Text>
      <SearchBar />
    </Box>
  );
}

export default App;
