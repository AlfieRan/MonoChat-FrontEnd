import React, { Component, useEffect, useState } from "react";
import * as env from "../env";
import { Flex, Text, Link } from "@chakra-ui/react";

const Message = (props: { id: string; name: string }) => {
  const [UserInfo, setUserInfo] = useState<{
    id: string;
    name: string;
  }>({
    id: props.id,
    name: props.name
  });

  return (
    <Link
      m={2}
      flexDir={"row"}
      w={"inherit"}
      maxWidth={"70%"}
      fontSize={[14, 15, 16, 18, 24, 31]}
      bg={"LightGrey"}
      color={"#FFF"}
      right={0}
      px={4}
      py={3}
      href={`${env.URL}users/?id=${UserInfo.id}`}
    >
      <Text>{UserInfo.name}</Text>
    </Link>
  );
};

export default Message;
