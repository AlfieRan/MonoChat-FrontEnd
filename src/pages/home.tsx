import React from "react";
import NavBar from "../components/NavBar";
import ChatBox from "../components/ChatBox";
import { Box, Text, Heading, Center, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <NavBar />
      <Center m={3} h={"80vh"}>
        <ChatBox Chatid={"06bf84e3-3119-47c8-b882-2959841b080c"} />
      </Center>
    </Box>
  );
};

export default Home;
