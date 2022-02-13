import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import ChatBox from "../components/ChatBox";
import FriendBox from "../components/FriendBox";
import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { checkUserLogin } from "../utils/hooks";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    checkUserLogin().then((isLogged) => {
      if (!isLogged.logged) {
        router.push("signin");
      }
    });
  }, []);

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
