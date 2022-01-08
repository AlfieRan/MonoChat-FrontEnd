import React, { useEffect, useState } from "react";
import * as env from "../env";
import NavBar from "../components/NavBar";
import {
  Box,
  Text,
  Heading,
  Input,
  Button,
  Link,
  useBoolean,
  Center,
  Image
} from "@chakra-ui/react";
import SignUp from "./signup";

interface LoginUser {
  email?: string;
  password?: string;
}

const Signin = () => {
  const [SignedIn, setSignedIn] = useBoolean(false);
  const [Loading, setLoading] = useBoolean();
  const [showPassword, setShowPassword] = useBoolean(false);
  const [err, setErr] = useState<{ enabled: boolean; text: string }>({
    enabled: false,
    text: "Something Went Wrong, Please Try Again."
  });
  const [showSignUp, setShowSignUp] = useBoolean(false);
  const [SignUpData, setSignUpData] = useState<LoginUser>({});

  async function DoesUserExist(email: string) {
    const SignUpRequest = new Request(
      `${env.ApiURL}users/check?email=${email}`,
      {
        method: "GET",
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    await fetch(SignUpRequest)
      .then(res => res.json())
      .then(response => {
        if (response.successful === true) {
          if (response.exists === true) {
            setLoading.off();
            console.log("user exists");
            setErr({ enabled: false, text: "" });
            setShowPassword.on();
          } else {
            console.log("User Doesn't exist");
            setErr({
              enabled: true,
              text: "There's no Account with that Email"
            });
            setShowSignUp.on();
            setLoading.off();
          }
        } else {
          console.log("Connection Error");
          setErr({
            enabled: true,
            text: "A Connection Error has Occurred, Please Try Again."
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    try {
      // @ts-ignore
      SignUpData.email = document.getElementById("email").value;
    } catch (err) {
      console.log(err);
    }
  });

  async function SubmitLogin() {
    setLoading.on();
    if (SignUpData.email != null || SignUpData.email != undefined) {
      await DoesUserExist(SignUpData.email);
    } else {
      setLoading.off();
      // @ts-ignore
      document.getElementById("email").style.borderColor = "#FF2222";
    }
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
          Sign In
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
              setSignUpData(prev => ({ ...prev, email: e.target.value }));
              setErr({ enabled: false, text: "" });
              setShowSignUp.off();
              setShowPassword.off();
            }}
            borderRadius={[18]}
            borderColor={err.enabled ? "red.500" : "white"}
            width={[450]}
            fontSize={[20]}
            marginTop={[5]}
            borderWidth={2}
          />
          <Text
            hidden={!err.enabled}
            fontSize={[24]}
            noOfLines={1}
            // marginTop={3}
            color={"#FF4444"}
          >
            {err.text}
          </Text>
          <Link
            href={`${env.URL}signup?email=${SignUpData.email}`}
            hidden={!showSignUp}
            fontSize={[24]}
            noOfLines={1}
            color={"#fff"}
            borderRadius={25}
            borderWidth={3}
            borderColor={"#0055FF"}
            width={[450]}
            background={"#0055FF"}
            _hover={{ bg: "#003399" }}
            _active={{
              bg: "#3784ff",
              transform: "scale(0.97)"
            }}
          >
            <Center>Sign up Instead?</Center>
          </Link>
          <Input
            placeholder="Password"
            id={"password"}
            value={SignUpData.password}
            onChange={e => {
              SignUpData.password = e.target.value;
            }}
            borderRadius={[18]}
            width={[450]}
            fontSize={[20]}
            marginTop={[5]}
            borderWidth={2}
            hidden={!showPassword}
          />
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
      <Image
        hidden={!SignedIn}
        src={
          "https://media.discordapp.net/attachments/796385294097711163/929430575633276948/unknown.png"
        }
      ></Image>
    </Box>
  );
};

export default Signin;
