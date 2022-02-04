import React, { Component, useEffect, useState } from "react";
import * as env from "../env";
import { Flex, Text, Link } from "@chakra-ui/react";

const ChatPreviewBox = (props: { id: string; name: string }) => {
  const [ChatInfo, setChatInfo] = useState<{
    id: string;
    name: string;
  }>({
    id: props.id,
    name: props.name
  });

  console.log(ChatInfo);

  return (
    <Link
      flexDir={"row"}
      maxWidth={"100%"}
      fontSize={[14, 15, 16, 18, 24, 31]}
      bg={"LightGrey"}
      color={"#FFF"}
      right={0}
      px={4}
      py={3}
      href={`${env.URL}home/?Chatid=${ChatInfo.id}`}
    >
      <Text>{ChatInfo.name}</Text>
    </Link>
  );
};

export default ChatPreviewBox;
