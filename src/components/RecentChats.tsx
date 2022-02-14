import React, { useEffect, useState } from "react";
import { Flex, Center, Text, VStack } from "@chakra-ui/react";
import UserBox from "./ChatPreviewBox";
import { GetRecentChats } from "../utils/hooks";

const RecentChats = () => {
  const [UserRecentChats, SetUserRecentChats] = useState<
    { id: string; chatname: string }[]
  >([{ id: "", chatname: "" }]);

  const { data: RecChats, error: RecChatError } = GetRecentChats();

  useEffect(() => {
    if (RecChats) {
      SetUserRecentChats(RecChats.chats);
    }
  }, [RecChats]);

  return (
    <Flex
      w={"inherit"}
      h={"full"}
      flexDir={"column"}
      p={3}
      fontSize={[10, 16, 21, 28, 38, 48]}
    >
      <Center
        borderTopRadius={15}
        w={"inherit"}
        p={1}
        fontSize={[14, 20, 25, 33, 42, 52]}
        bg={"DarkBlue"}
        color={"#FFF"}
      >
        <Text>Friends</Text>
      </Center>
      <VStack
        bg={"#565656"}
        px={4}
        h={"full"}
        w={"inherit"}
        borderBottomRadius={15}
      >
        {UserRecentChats && (
          <Flex
            flexDir={"column-reverse"}
            overflow={"auto"}
            scrollPaddingBottom={"2em"}
            w={"inherit"}
          >
            {UserRecentChats.map((Chat: { id: string; chatname: string }) => (
              <UserBox id={Chat.id} name={Chat.chatname} key={Chat.id} />
            ))}
          </Flex>
        )}
      </VStack>
    </Flex>
  );
};

export default RecentChats;
