import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import * as env from "../env";
import { toast, Toaster } from "react-hot-toast";
import ChatBox from "../components/ChatBox";
import { GetUserToUserChat } from "../utils/hooks";
import { useRouter } from "next/router";

interface UserInfo {
  name: string;
  id: string;
}

const Users = () => {
  const [UserInfo, SetUserInfo] = useState<UserInfo>({
    name: "Loading...",
    id: ""
  });

  const router = useRouter();
  useEffect(() => {
    if (router && router.query.id) {
      try {
        const QueryUserID = router.query.id;
        SetUserInfo(prev => ({ ...prev, id: QueryUserID as string }));
        const chatid = GetUserToUserChat(QueryUserID as string);
      } catch (e) {
        console.log(`Generic Error: ${e}`);
      }
    } else {
      console.log("No User Id supplied");
    }
  }, [router]);

  return (
    <Box w={"100vw"} h={"100vh"} display={"flex"} flexFlow={"column"}>
      <Toaster />
      <NavBar />
      <Center flex={"auto"}>
        <Flex
          w={"95vw"}
          h={"83vh"}
          bg={"LightGrey"}
          borderRadius={20}
          flexDir={"column"}
        >
          <Center w={"95vw"} h={"10vh"} bg={"MidBlue"} borderTopRadius={20}>
            <Text fontSize={"4vh"}>{UserInfo.name}</Text>
          </Center>
          <ChatBox Chatid={""} enableHeader={false}></ChatBox>
        </Flex>
      </Center>
    </Box>
  );
};

export default Users;
