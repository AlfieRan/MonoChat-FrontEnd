import React, { Component, useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { MessageInfo } from "../utils/types";

const Message = (props: { info: MessageInfo }) => {
  const [MessageInfo, setMessageInfo] = useState<{
    id: string;
    content: string;
    userid: string;
    username: string;
    createdAt: string;
  }>({
    id: props.info.id,
    content: props.info.content,
    userid: props.info.sender.id,
    // userid: "",
    username: props.info.sender.name,
    // username: "",
    createdAt: ""
  });

  const [MsgColour, setMsgColour] = useState<string>("LightBlue");

  // useEffect(() => {
  //   if (ChatInfo.byUser) {
  //     setMsgColour("LightBlue");
  //   } else {
  //     setMsgColour("LightGreen");
  //   }
  // }, [ChatInfo.byUser]);

  return (
    <Flex
      flexDir={"column"}
      maxWidth={"70%"}
      fontSize={[14, 15, 16, 18, 24, 31]}
      color={"#FFF"}
      m={2}
    >
      <Text px={2}>{MessageInfo.username}</Text>
      <Text bg={MsgColour} borderRadius={30} px={4} py={3}>
        {MessageInfo.content}
      </Text>
    </Flex>
  );
};

export default Message;
