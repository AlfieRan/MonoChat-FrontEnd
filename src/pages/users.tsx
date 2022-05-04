import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { toast, Toaster } from "react-hot-toast";
import ChatBox from "../components/ChatBox";
import { GetUserToUserChat } from "../utils/hooks";
import { useRouter } from "next/router";
import { fetcher } from "../utils/fetcher";

interface UserInfo {
  name: string;
  id: string;
}

const Users = () => {
  const [UserInfo, setUserInfo] = useState<UserInfo>({
    name: "Loading...",
    id: "",
  });
  const [isSelf, setIsSelf] = useState<boolean>(false);

  const [chatid, setChatId] = useState<string>("");

  const router = useRouter();
  useEffect(() => {
    if (router) {
      fetcher<{ logged: boolean }>("GET", "user/checkAuth").then((res) => {
        if (!res.data.logged) {
          router.push("/signin");
        }

        if (router && router.query.id) {
          try {
            const QueryUserID = router.query.id;
            fetcher<string>("GET", "getUserId").then((curUserId) => {
              if (curUserId.data === QueryUserID) {
                setIsSelf(true);
                setUserInfo((prev) => ({
                  ...prev,
                  name: "This is your profile!",
                }));
              } else {
                fetcher<{ name: string }>("GET", `user?q=${QueryUserID}`).then(
                  (res) => {
                    setUserInfo((prev) => ({ ...prev, name: res.data.name }));
                  }
                );
                setUserInfo((prev) => ({ ...prev, id: QueryUserID as string }));
                GetUserToUserChat(QueryUserID as string).then((res) => {
                  setChatId(res.data);
                });
              }
            });
          } catch (e) {
            console.log(`Generic Error: ${e}`);
          }
        } else {
          console.log("No User Id supplied");
        }
      });
    }
  }, [router]);

  return (
    <Box w={"100vw"} h={"100vh"} display={"flex"} flexFlow={"column"}>
      <Toaster />
      <NavBar />
      <Center flex={"auto"}>
        <Flex
          w={"95vw"}
          h={"83vh"}
          bg={"LightGrey"}
          borderRadius={20}
          flexDir={"column"}
        >
          <Center w={"95vw"} h={"10vh"} bg={"MidBlue"} borderTopRadius={20}>
            <Text fontSize={"4vh"}>{UserInfo.name}</Text>
          </Center>
          {!isSelf && chatid && (
            <ChatBox Chatid={chatid} enableHeader={false}></ChatBox>
          )}
          {isSelf && (
            <Center w={"full"} h={"full"}>
              This is your own profile, you can't chat to yourself!
            </Center>
          )}
        </Flex>
      </Center>
    </Box>
  );
};

export default Users;
