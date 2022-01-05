import React from "react";
import NavBar from "../components/NavBar";
import { Box, Text } from "@chakra-ui/react";

const Users = () => {
  return (
    <Box>
      <NavBar />
      <Text>Users Page</Text>
    </Box>
  );
};

function getParams(window: Window) {
  return window.location;
}

export default Users;
