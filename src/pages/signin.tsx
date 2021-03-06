import React, { useState } from "react";
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
  Center
} from "@chakra-ui/react";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { fetcher } from "../utils/fetcher";

interface LoginUser {
  email: string;
  password: string;
}

const Signin = () => {
  const [Loading, setLoading] = useBoolean();
  const [showPassword, setShowPassword] = useBoolean(false);
  const [err, setErr] = useState<{ enabled: boolean; text: string }>({
    enabled: false,
    text: "Something Went Wrong, Please Try Again."
  });
  const [showSignUp, setShowSignUp] = useBoolean(false);
  const [signUpData, setSignUpData] = useState<LoginUser>({
    email: "",
    password: ""
  });
  const router = useRouter();

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

  async function SubmitLogin() {
    setLoading.on();
    if (
      (signUpData.email != null || signUpData.email != undefined) &&
      !showPassword
    ) {
      await DoesUserExist(signUpData.email);
    } else if (
      (signUpData.email != null || signUpData.email != undefined) &&
      showPassword
    ) {
      await DoesUserExist(signUpData.email).then(() => {
        if (showPassword) {
          fetcher("POST", "signin", {
            email: signUpData.email,
            password: signUpData.password
          })
            .then(response => {
              toast.success("Sign In Successful!");
              router.push("/home");
            })
            .catch(e => {
              toast.error("Sign in Failed");
            });
        }
      });
    } else {
      setLoading.off();
    }
  }

  return (
    <Box>
      <Toaster />
      <NavBar />
      <Box
        marginTop={[40]}
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
            value={signUpData.email}
            onChange={e => {
              setSignUpData(prev => ({ ...prev, email: e.target.value }));
              setErr({ enabled: false, text: "" });
              setShowSignUp.off();
              setShowPassword.off();
            }}
            borderRadius={25}
            onLoad={e => {
              console.log(e);
              // SignUpData.email = this.value;
            }}
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
            href={`${env.URL}signup?email=${signUpData.email}`}
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
            type={"password"}
            value={signUpData.password}
            onChange={e => {
              setSignUpData(prevState => ({
                ...prevState,
                password: e.target.value
              }));
            }}
            borderRadius={25}
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
          <Link
            marginTop={[2]}
            fontSize={[20]}
            variant={"link"}
            href={`${env.URL}/signup`}
          >
            <Text color={"#0088FF"} marginLeft={2} mb={2}>
              Need an Account? Sign Up
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
