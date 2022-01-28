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

const Message = (props: { content: string; byUser: boolean }) => {
  const [ChatInfo, setChatInfo] = useState<{
    byUser: boolean;
    content: string;
  }>({
    byUser: props.byUser,
    content: props.content
  });
  const [MsgColour, setMsgColour] = useState<string>("");

  useEffect(() => {
    if (ChatInfo.byUser) {
      setMsgColour("LightBlue");
    } else {
      setMsgColour("LightGreen");
    }
  }, [ChatInfo.byUser]);

  return (
    <Flex
      m={2}
      flexDir={"row"}
      maxW={"70%"}
      fontSize={20}
      bg={MsgColour}
      color={"#FFF"}
      borderRadius={30}
      right={0}
      px={4}
      py={3}
    >
      <Text>{ChatInfo.content}</Text>
    </Flex>
  );
};

export default Message;
