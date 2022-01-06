import React from "react";
import * as env from "../env";
import NavBar from "../components/NavBar";
import {
  Box,
  Text,
  Heading,
  Input,
  Button,
  Link,
  useBoolean
} from "@chakra-ui/react";

interface LoginUser {
  email?: string;
  password?: string;
}
const Login = () => {
  const [Loading, setLoading] = useBoolean();
  let SignUpData: LoginUser = {};

  function SubmitLogin() {
    console.log("do something");
    setLoading.on();
  }

  return (
    <Box>
      <NavBar />
      <Box
        marginTop={[40]}
        bg="#222222"
        h={"100%"}
        display="flex"
        flexDir="column"
        alignItems={"center"}
        verticalAlign={"middle"}
        color="white"
        fontFamily={
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;'
        }
      >
        {/* TODO Add varied sizes for everything that's within an array as they're only setup for 1080p atm*/}
        <Heading fontSize={[100]} fontWeight={500} marginBottom={[5]}>
          Login
        </Heading>
        <Box
          bg={"#444"}
          width={[500]}
          height={"100%"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          borderRadius={25}
          fontSize={[40]}
          marginBottom={10}
        >
          <Input
            placeholder="Email"
            id={"email"}
            value={SignUpData.email}
            onChange={e => {
              SignUpData.email = e.target.value;
            }}
            borderRadius={[18]}
            width={[450]}
            fontSize={[20]}
            marginTop={[5]}
            borderWidth={2}
          ></Input>
          <Input
            placeholder="Password"
            type={"password"}
            id={"pass"}
            value={SignUpData.password}
            onChange={e => {
              SignUpData.password = e.target.value;
            }}
            borderRadius={[18]}
            width={[450]}
            fontSize={[20]}
            marginTop={[5]}
            borderWidth={2}
          ></Input>
          <Button
            isLoading={Loading}
            borderRadius={25}
            width={[450]}
            fontSize={[25]}
            marginTop={[5]}
            background={"#0055FF"}
            _hover={{ bg: "#003399" }}
            _active={{
              bg: "#3784ff",
              transform: "scale(0.97)"
            }}
            onClick={SubmitLogin}
          >
            Next
          </Button>
          <Link marginTop={[2]} fontSize={[20]} variant={"link"}>
            <Text
              color={"#0088FF"}
              marginLeft={2}
              href={`${env.URL}/signup`}
              mb={2}
            >
              Need an Account? Sign Up
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

// import {hash, compare} from 'bcrypt'
// //Hash password
// await hash(newUser.password, 12) // Returns string
// //Compare string with hashed password
// await compare(reqUser.password, queryUser.password) // Returns boolean
