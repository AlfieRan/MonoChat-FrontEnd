import React, { useState } from "react";
import { Flex, Center, Text, VStack } from "@chakra-ui/react";
import UserBox from "./UserBox";

type BaseUser = {
  id: string;
  name: string;
};

const FriendBox = () => {
  const [UserFriends, SetUserFriends] = useState<BaseUser[]>([
    { id: "", name: "" }
  ]);

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
        {UserFriends && (
          <Flex
            flexDir={"column-reverse"}
            overflow={"auto"}
            scrollPaddingBottom={"2em"}
            w={"inherit"}
          >
            {UserFriends.map((FriendID: BaseUser) => (
              <UserBox
                id={FriendID.id}
                name={FriendID.name}
                key={FriendID.id}
              />
            ))}
          </Flex>
        )}
      </VStack>
    </Flex>
  );
};

export default FriendBox;
