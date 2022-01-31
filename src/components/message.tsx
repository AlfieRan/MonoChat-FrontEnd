import React, { Component, useEffect, useState } from "react";
import * as env from "../env";
import { Flex, Text } from "@chakra-ui/react";
import toast from "react-hot-toast";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { getMessageInfo } from "../utils/hooks";

const Message = (props: { id: string }) => {
  const [MessageInfo, setMessageInfo] = useState<{
    id: string;
    content: string;
    userid: string;
    createdAt: string;
  }>({
    id: props.id,
    content: "",
    userid: "",
    createdAt: ""
  });

  const { data: MessageInfoData, error: MessageError } = getMessageInfo(
    props.id
  );

  useEffect(() => {
    if (MessageInfoData) {
      setMessageInfo(prev => ({
        ...prev,
        content: MessageInfoData.content,
        createdAt: MessageInfoData.createdAt,
        userid: MessageInfoData.userId
      }));
    }
  }, [MessageInfoData]);

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
      m={2}
      flexDir={"row"}
      w={"inherit"}
      maxWidth={"70%"}
      fontSize={[14, 15, 16, 18, 24, 31]}
      bg={MsgColour}
      color={"#FFF"}
      borderRadius={30}
      right={0}
      px={4}
      py={3}
    >
      <Text>{MessageInfo.content}</Text>
    </Flex>
  );
};

export default Message;
