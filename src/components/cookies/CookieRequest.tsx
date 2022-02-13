import React, { useState } from "react";
import { Text, Button, Center, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { returnAddressType } from "../../utils/types";

type Props = {
  hidden?: boolean;
  retAddress: returnAddressType;
};

const cookieRequest = (props: Props) => {
  const router = useRouter();

  function enableCookies() {
    localStorage.setItem("enable_cookies", JSON.stringify(true));
    if (props.retAddress.hasAddress) {
      router.push(props.retAddress.Address);
    } else {
      router.push("/");
    }
  }

  function disableCookies() {
    localStorage.setItem("enable_cookies", JSON.stringify(false));
    router.reload();
  }
  if (props.hidden) {
    return null;
  }
  return (
    <Box w={"100vw"} h={"100vh"} display={"block"}>
      <Center w={"full"} h={"full"} flexDir={"column"} bg={"MidBlue"}>
        <Center br={15} flexDir={"column"}>
          <Text fontSize={"5xl"}>MonoChat Needs Cookies to function</Text>
          <Text>Do you consent to letting this site use cookies?</Text>
        </Center>
        <Center>
          <Button
            m={5}
            bg={"LightBlue"}
            _hover={{ bg: "DarkBlue" }}
            onClick={enableCookies}
          >
            I Consent
          </Button>
          <Button
            m={5}
            bg={"LightBlue"}
            _hover={{ bg: "DarkBlue" }}
            onClick={disableCookies}
          >
            I do not Consent
          </Button>
        </Center>
      </Center>
    </Box>
  );
};

export default cookieRequest;
