import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ChatBox from "../components/ChatBox";
import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  checkUserLogin,
  GetMostRecentChat,
  GetRecentChats,
} from "../utils/hooks";
import FriendBox from "../components/RecentChats";
import { UserLogging } from "../utils/types";

const Home = () => {
  const router = useRouter();
  const [noRecentChats, setNoRecentChats] = useState<boolean>(false);
  const [CurChatInfo, setCurChatInfo] = useState<{ id: string }>({
    id: "",
  });

  useEffect(() => {
    checkUserLogin().then((isLogged: UserLogging) => {
      if (!isLogged.logged) {
        router.push("signin");
      }
    });
  }, []);

  useEffect(() => {
    if (router && router.query.Chatid) {
      setCurChatInfo((prev) => ({
        ...prev,
        id: router.query.Chatid as string,
      }));
    }
  }, [router]);

  return (
    <Box>
      <NavBar />
      <Flex justifyContent={"space-between"}>
        <Flex h={"74vh"} w={"21vw"}>
          <FriendBox />
        </Flex>
        <Flex h={"74vh"} w={"78vw"}>
          <ChatBox Chatid={CurChatInfo.id} enableHeader={!noRecentChats} />
          <Center
            hidden={!noRecentChats}
            w={"full"}
            textAlign={"center"}
            flexDir={"column"}
            fontSize={"2xl"}
          >
            <Text mb={5}>
              You have no Recent Chats! <br /> Search For someone new and start
              Chatting!
            </Text>
            <Link href={"/"}> Start Searching here...</Link>
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
