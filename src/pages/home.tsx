import React from "react";
import NavBar from "../components/NavBar";
import ChatBox from "../components/ChatBox";
import { Box, Text, Heading, Center, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <NavBar />
      <Flex h={"74vh"} w={"full"}>
        <ChatBox Chatid={"06bf84e3-3119-47c8-b882-2959841b080c"} />
      </Flex>
    </Box>
  );
};

export default Home;
