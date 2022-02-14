import React from "react";
import { Text, Button, Center, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { returnAddressType } from "../../utils/types";

interface Props {
  hidden?: boolean;
  retAddress: returnAddressType;
}

const CookieDisabled = (props: Props) => {
  const router = useRouter();

  function enableCookies() {
    localStorage.setItem("enable_cookies", JSON.stringify(true));

    if (props.retAddress.hasAddress) {
      router.push(props.retAddress.Address);
    } else {
      router.push("home");
    }
  }
  if (props.hidden) {
    return null;
  }
  return (
    <Box w={"100vw"} h={"100vh"} display={"block"}>
      <Center w={"full"} h={"full"} flexDir={"column"} bg={"MidBlue"}>
        <Center flexDir={"column"} textAlign={"center"}>
          <Text fontSize={"5xl"}>You Have Disabled Cookies</Text>
          <Text>This means that this site will not work</Text>
          <Text>Would you like to change your decision and give consent?</Text>
        </Center>
        <Center>
          <Button
            m={5}
            bg={"LightBlue"}
            _hover={{ bg: "DarkBlue" }}
            onClick={enableCookies}
          >
            I Give My Consent
          </Button>
        </Center>
      </Center>
    </Box>
  );
};

export default CookieDisabled;
