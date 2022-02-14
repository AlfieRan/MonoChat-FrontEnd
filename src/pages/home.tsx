import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ChatBox from "../components/ChatBox";
import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { checkUserLogin } from "../utils/hooks";
import FriendBox from "../components/RecentChats";
import { UserLogging } from "../utils/types";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    checkUserLogin().then((isLogged: UserLogging) => {
      if (!isLogged.logged) {
        router.push("signin");
      }
    });
  }, []);

  const [CurChatInfo, setCurChatInfo] = useState<{ id: string }>({
    id: "06bf84e3-3119-47c8-b882-2959841b080c",
  });

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
