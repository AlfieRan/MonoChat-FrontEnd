import React from "react";
import NavBar from "../components/NavBar";
import ChatBox from "../components/ChatBox";
import FriendBox from "../components/FriendBox";
import { Box, Text, Heading, Center, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <NavBar />
      <Flex justifyContent={"space-between"}>
        <Flex h={"74vh"} w={"21vw"}>
          <FriendBox></FriendBox>
        </Flex>
        <Flex h={"74vh"} w={"78vw"}>
          <ChatBox Chatid={"06bf84e3-3119-47c8-b882-2959841b080c"} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
