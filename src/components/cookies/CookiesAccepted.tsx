import React from "react";
import { Text, Button, Center, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NavBar from "../NavBar";

interface Props {
  hidden?: boolean;
}

const cookieRequest = (props: Props) => {
  const router = useRouter();

  function disableCookies() {
    localStorage.setItem("enable_cookies", JSON.stringify(false));
    router.reload();
  }
  if (props.hidden) {
    return null;
  }
  return (
    <Box w={"100vw"} h={"100vh"} display={"block"} bg={"MidBlue"}>
      <NavBar />
      <Center w={"full"} h={"90%"} flexDir={"column"}>
        <Center br={15} flexDir={"column"}>
          <Text fontSize={"5xl"}>You Have Enabled Cookies</Text>
          <Text>Do you wish to revoke consent?</Text>
        </Center>
        <Center>
          <Button
            m={5}
            bg={"LightBlue"}
            _hover={{ bg: "DarkBlue" }}
            onClick={disableCookies}
          >
            I Revoke Consent
          </Button>
        </Center>
      </Center>
    </Box>
  );
};

export default cookieRequest;
