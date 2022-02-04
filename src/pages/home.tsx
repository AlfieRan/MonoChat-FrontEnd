import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ChatBox from "../components/ChatBox";
import FriendBox from "../components/RecentChats";
import { Box, Text, Heading, Center, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Home = () => {
  const [CurChatInfo, setCurChatInfo] = useState<{ id: string }>({
    id: "06bf84e3-3119-47c8-b882-2959841b080c"
  });

  const router = useRouter();
  useEffect(() => {
    if (router && router.query.Chatid) {
      setCurChatInfo(prev => ({ ...prev, id: router.query.Chatid as string }));
    }
  }, [router]);

  return (
    <Box>
      <NavBar />
      <Flex justifyContent={"space-between"}>
        <Flex h={"74vh"} w={"21vw"}>
          <FriendBox></FriendBox>
        </Flex>
        <Flex h={"74vh"} w={"78vw"}>
          <ChatBox Chatid={CurChatInfo.id} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
