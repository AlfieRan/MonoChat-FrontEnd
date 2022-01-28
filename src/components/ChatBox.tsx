import React, { Component, useEffect, useState } from "react";
import * as env from "../env";
import {
  Link,
  Flex,
  Spacer,
  Center,
  useBoolean,
  Text,
  Box,
  VStack
} from "@chakra-ui/react";
import toast from "react-hot-toast";
import message from "./message";
import Message from "./message";

const ChatBox = (props: { Chatid: string }) => {
  const [LoadingFlag, setLoadingFlag] = useBoolean(false);
  const [ChatInfo, setChatInfo] = useState<{ id: string; name: string }>({
    id: props.Chatid,
    name: "Loading..."
  });

  async function getChatInfo(Chatid: string) {
    setLoadingFlag.on();
    const ChatRequest = new Request(`${env.ApiURL}chats/info?id=${Chatid}`, {
      method: "GET",
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json"
      }
    });

    await fetch(ChatRequest)
      .then(response => response.json())
      .then(response => {
        if (response.successful === true) {
          setChatInfo(prev => ({ ...prev, name: response.info.chatname }));
        }
      });
  }

  useEffect(() => {
    getChatInfo(props.Chatid).then(() => {
      setLoadingFlag.off();
    });
  }, []);

  return (
    <Box
      w={"full"}
      h={"full"}
      flexDir={"column"}
      fontSize={[30]}
      bg={"MidBlue"}
      color={"#FFF"}
      borderRadius={15}
    >
      <Flex w={"full"}>
        <Center w={"full"}>
          <Text>{ChatInfo.name}</Text>
        </Center>
      </Flex>
      <Box w={"full"} h={"full"} pl={2} pr={2} pb={2}>
        <VStack bg={"#565656"} h={"94%"} borderRadius={13}>
          <Message content={"Message anjfhdsbjb"} byUser={true} />
        </VStack>
      </Box>
    </Box>
  );
};

export default ChatBox;
