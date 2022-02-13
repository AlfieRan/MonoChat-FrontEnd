import React, { useEffect, useState } from "react";
import * as env from "../env";
import {
  Link,
  Flex,
  Menu,
  MenuButton,
  Text,
  MenuList,
  MenuItem,
  IconButton,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { UserLogging } from "../utils/types";
import { checkUserLogin } from "../utils/hooks";
import { ChatIcon, Search2Icon } from "@chakra-ui/icons";

const NavBar = () => {
  const mainURL: string = env.URL;
  const router = useRouter();

  const [isLogged, setIsLogged] = useState<UserLogging>({ logged: false });
  const [userName, setUserName] = useState<string>("user");

  function CheckCookies() {
    const data = JSON.parse(localStorage.getItem("enable_cookies") as string);
    if (!data) {
      router.push(`cookies/?from=${router.pathname}`);
    }
  }

  useEffect(() => {
    CheckCookies();
    checkUserLogin().then((response: UserLogging) => {
      setIsLogged(response);
      if (response.logged) {
        setUserName(response.name);
      }
    });
  }, []);

  return (
    <Flex
      w={"100vw"}
      p={1}
      fontSize={[14, 20, 25, 33, 42, 52]}
      bg={"LightBlue"}
      color={"#FFF"}
      justifyContent={"space-between"}
    >
      <Flex ml={"1vw"} w={"15vw"} textAlign={"left"}>
        <Link
          href={mainURL + "donate"}
          _hover={{ color: "#4477bb" }}
          w={"15vw"}
        >
          Donate
        </Link>
      </Flex>
      <Center w={"68vw"} textAlign={"center"}>
        <Link href={mainURL} _hover={{ color: "#4477bb" }} mr={"1vw"}>
          MonoChat
        </Link>
        <IconButton
          ml={"1vw"}
          aria-label={"search Monochat"}
          icon={<ChatIcon />}
          bg={"none"}
          fontSize={[12, 17, 21, 29, 38, 45]}
          _hover={{ bg: "none", color: "#4477bb" }}
          _active={{ bg: "none", color: "#4477bb" }}
          onClick={(e) => {
            router.push("home");
          }}
        >
          Chat Icon
        </IconButton>
      </Center>
      <Flex mr={"1vw"} w={"15vw"} textAlign={"right"} verticalAlign={"middle"}>
        <Link
          w={"15vw"}
          href={mainURL + "signin"}
          _hover={{ color: "#4477bb" }}
          hidden={isLogged.logged}
        >
          SignIn
        </Link>
        <Menu closeOnSelect placement={"bottom-end"}>
          <MenuButton
            hidden={!isLogged.logged}
            bg={"none"}
            fontSize={[14, 20, 25, 33, 42, 52]}
            fontWeight={"normal"}
            _hover={{ bg: "none", color: "#4477bb" }}
            w={"15vw"}
            h={"full"}
          >
            <Text w={"15vw"} textAlign={"right"} verticalAlign={"middle"}>
              {userName}
            </Text>
          </MenuButton>
          <MenuList bg={"MidBlue"} fontSize={[12, 17, 21, 26, 34, 42]}>
            <MenuItem
              _hover={{ bg: "none", color: "#4477bb" }}
              _focus={{ bg: "none" }}
            >
              view Profile
            </MenuItem>
            <MenuItem
              _hover={{ bg: "none", color: "#4477bb" }}
              _focus={{ bg: "none" }}
            >
              Log Out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default NavBar;
