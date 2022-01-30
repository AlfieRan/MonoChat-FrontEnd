import React, { Component, useEffect, useState } from "react";
import { Flex, Center, Text, Box, VStack } from "@chakra-ui/react";
import toast from "react-hot-toast";
import Message from "./message";
import { getChatInfo, getMessageIds } from "../utils/hooks";

const ChatBox = (props: { Chatid: string }) => {
  const [ChatInfo, setChatInfo] = useState<{
    id: string;
    name: string;
    messageids: string[];
  }>({
    id: props.Chatid,
    name: "Loading...",
    messageids: [""]
  });

  const { data: ChatInfoData, error: ChatInfoError } = getChatInfo(ChatInfo.id);

  const { data: MsgIdData, error: MsgIdError } = getMessageIds(ChatInfo.id);

  useEffect(() => {
    if (ChatInfoData) {
      setChatInfo(prev => ({ ...prev, name: ChatInfoData.chatname }));
    }
  }, [ChatInfoData]);

  useEffect(() => {
    if (MsgIdData) {
      console.log(MsgIdData);
      setChatInfo(prev => ({ ...prev, messageids: MsgIdData.messages }));
    }
  }, [MsgIdData]);

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
      <VStack bg={"#565656"} h={"full"} borderBottomRadius={13}>
        {ChatInfo.messageids && (
          <Flex flexDir={"column"}>
            {ChatInfo.messageids.map((MsgId: string) => (
              <Message id={MsgId} />
            ))}
          </Flex>
        )}
      </VStack>
    </Box>
  );
};

export default ChatBox;
