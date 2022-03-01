import React, { useEffect, useState } from "react";
import {
  Flex,
  Center,
  Text,
  Box,
  VStack,
  Input,
  Spacer,
  Button,
} from "@chakra-ui/react";
import Message from "./message";
import { getChatInfo, getMessages } from "../utils/hooks";
import { fetcher } from "../utils/fetcher";
import { MessageInfo } from "../utils/types";

async function sendMessage(contents: string, userId: string, ChatId: string) {
  const newMsgId = await fetcher("POST", `message/send`, {
    senderId: userId,
    chatId: ChatId,
    msgcontents: contents,
  });
  // @ts-ignore
  return newMsgId.data.Msg as MessageInfo;
}

const ChatBox = (props: { Chatid: string; enableHeader?: boolean }) => {
  const [ChatInfo, setChatInfo] = useState<{
    id: string;
    name: string;
    messages: MessageInfo[];
  }>({
    id: props.Chatid,
    name: "Loading...",
    messages: [{ id: "", content: "", sender: { id: "", name: "" } }],
  });

  const [MessageBox, setMessageBox] = useState<string>("");
  const { data: ChatInfoData, error: ChatInfoError } = getChatInfo(ChatInfo.id);
  const { data: MsgData, error: MsgError } = getMessages(ChatInfo.id);

  useEffect(() => {
    if (ChatInfoData) {
      setChatInfo((prev) => ({ ...prev, name: ChatInfoData.chatname }));
    }
  }, [ChatInfoData]);

  useEffect(() => {
    if (MsgData) {
      setChatInfo((prev) => ({ ...prev, messages: MsgData.messages }));
    }
  }, [MsgData]);

  return (
    <Flex
      flexDir={"column"}
      h={"full"}
      w={"inherit"}
      p={3}
      fontSize={[10, 16, 21, 28, 38, 48]}
    >
      <Flex
        w={"full"}
        bg={"DarkBlue"}
        color={"#FFF"}
        borderTopRadius={15}
        hidden={!props.enableHeader || false}
      >
        <Center w={"full"}>
          <Text>{ChatInfo.name}</Text>
        </Center>
      </Flex>
      <Flex
        w={"full"}
        h={"100%"}
        flexDir={"column"}
        mb={0}
        pb={0}
        bg={"#565656"}
        justifyContent={"space-between"}
        color={"#FFF"}
      >
        <VStack bg={"#565656"} px={4} h={"full"} w={"inherit"}>
          {ChatInfo.messages && (
            <Flex
              flexDir={"column-reverse"}
              overflow={"auto"}
              scrollPaddingBottom={"2em"}
              w={"inherit"}
            >
              {ChatInfo.messages.map((Msg: MessageInfo) => (
                <Message info={Msg} key={Msg.id} />
              ))}
            </Flex>
          )}
        </VStack>
        <Center bg={"#565656"} borderBottomRadius={15}>
          <Input
            height={"max-content"}
            value={MessageBox}
            placeholder={`Message ${ChatInfo.name}`}
            borderRadius={"lg"}
            bg={"White"}
            m={2}
            px={"2%"}
            fontSize={[10, 16, 22]}
            color={"#000"}
            onChange={(e) => {
              setMessageBox(e.target.value);
            }}
            w={"full"}
            onKeyDown={(e) => {
              if (e.key === "Enter" && MessageBox != "" && MessageBox != " ") {
                sendMessage(
                  MessageBox,
                  "ab6108ef-cd35-4bff-b2f0-35003883bac7",
                  ChatInfo.id
                ).then((newMsg) => {
                  setChatInfo((prev) => ({
                    ...prev,
                    messages: Array(newMsg, ...prev.messages),
                  }));
                  setMessageBox("");
                  window.scrollTo(0, document.body.scrollHeight);
                });
              }
            }}
          />
        </Center>
      </Flex>
    </Flex>
  );
};

export default ChatBox;
