import React, { Component, useEffect, useState } from "react";
import {
  Flex,
  Center,
  Text,
  Box,
  VStack,
  Input,
  Spacer,
  Button
} from "@chakra-ui/react";
import toast from "react-hot-toast";
import Message from "./message";
import { getChatInfo, getMessageIds } from "../utils/hooks";
import { fetcher } from "../utils/fetcher";
import { ArrowForwardIcon } from "@chakra-ui/icons";

async function sendMessage(contents: string, userId: string, ChatId: string) {
  const newMsgId = await fetcher("POST", `message/send`, {
    senderId: userId,
    chatId: ChatId,
    msgcontents: contents
  });
  // @ts-ignore
  return newMsgId.data.MsgId as string;
}

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

  const [MessageBox, setMessageBox] = useState<string>("");
  const { data: ChatInfoData, error: ChatInfoError } = getChatInfo(ChatInfo.id);

  const { data: MsgIdData, error: MsgIdError } = getMessageIds(ChatInfo.id);

  useEffect(() => {
    if (ChatInfoData) {
      setChatInfo(prev => ({ ...prev, name: ChatInfoData.chatname }));
    }
  }, [ChatInfoData]);

  useEffect(() => {
    if (MsgIdData) {
      setChatInfo(prev => ({ ...prev, messageids: MsgIdData.messages }));
    }
  }, [MsgIdData]);

  return (
    <Flex
      flexDir={"column"}
      h={"full"}
      w={"inherit"}
      p={3}
      fontSize={[10, 16, 21, 28, 38, 48]}
    >
      <Flex w={"full"} bg={"MidBlue"} color={"#FFF"} borderTopRadius={15}>
        <Center w={"full"}>
          <Text>{ChatInfo.name}</Text>
        </Center>
      </Flex>
      <Flex
        w={"full"}
        minH={"full"}
        mb={0}
        pb={0}
        bg={"#565656"}
        justifyContent={"space-between"}
        color={"#FFF"}
      >
        <VStack bg={"#565656"} px={4} h={"full"} w={"inherit"}>
          {ChatInfo.messageids && (
            <Flex
              flexDir={"column-reverse"}
              overflow={"auto"}
              scrollPaddingBottom={"2em"}
              w={"inherit"}
            >
              {ChatInfo.messageids.map((MsgId: string) => (
                <Message id={MsgId} key={MsgId} />
              ))}
            </Flex>
          )}
        </VStack>
      </Flex>
      <Center bg={"#565656"} borderBottomRadius={13}>
        <Input
          height={"max-content"}
          value={MessageBox}
          placeholder={`Message ${ChatInfo.name}`}
          borderRadius={100}
          bg={"White"}
          w={"50%"}
          my={2}
          px={"2%"}
          fontSize={[10, 16, 21, 28, 38, 48]}
          color={"#000"}
          onChange={e => {
            setMessageBox(e.target.value);
          }}
          onKeyDown={e => {
            if (e.key === "Enter") {
              sendMessage(
                MessageBox,
                "ab6108ef-cd35-4bff-b2f0-35003883bac7",
                ChatInfo.id
              ).then(newMsg => {
                setChatInfo(prev => ({
                  ...prev,
                  messageids: Array(newMsg, ...prev.messageids)
                }));
                setMessageBox("");
                window.scrollTo(0, document.body.scrollHeight);
              });
            }
          }}
        />
      </Center>
    </Flex>
  );
};

export default ChatBox;
