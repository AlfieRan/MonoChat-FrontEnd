import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  Link,
  useBoolean
} from "@chakra-ui/react";
import * as yup from "yup";
import useSWR from "swr";
import { UserInfo } from "../api/types";
import { fetcher } from "../api/api_connection";
import { Response } from "next/dist/server/web/spec-compliant/response";
import { RequestInit } from "next/dist/server/web/spec-extension/request";
import NavBar from "../components/NavBar";
import * as env from "../env";
import toast, { Toaster } from "react-hot-toast";

//TODO add proper validation stuff, just using basic shit atm.

// const SignUpSchema = yup.object({
//   firstname: yup.string().nullable(),
//   surname: yup.string().nullable(),
//   email: yup
//     .string()
//     .nullable()
//     .email(),
//   password: yup.string().nullable(),
//   passwordCheck: yup.string().nullable()
// });
//
// interface User extends yup.TypeOf<typeof SignUpSchema> {}
// const validated: User = User.cast(json);

interface User {
  firstname: string;
  surname: string;
  email: string;
  password: string;
  passwordCheck: string;
}

interface UserData {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
}

interface Params {
  firstname: boolean;
  surname: boolean;
  email: boolean;
  password: boolean;
  passwordCheck: boolean;
}

const SignUp = () => {
  const [Loadingflag, setLoadingFlag] = useBoolean();
  const [SignUpData, setSignUpData] = useState<User>({
    firstname: "",
    surname: "",
    email: "",
    password: "",
    passwordCheck: ""
  });
  const [paramErrs, setParamErrs] = useState<Params>({
    firstname: false,
    surname: false,
    email: false,
    password: false,
    passwordCheck: false
  });

  useEffect(() => {
    try {
      const refEmail = document.URL.split("?")[1].split("=")[1];
      // @ts-ignore
      setSignUpData(prev => ({ ...prev, email: refEmail }));
    } catch (err) {
      console.log("No refferal Email");
    }
  }, []);

  async function SubmitData(info: User) {
    const UserBody: UserData = {
      name: info.firstname + " " + info.surname,
      email: info.email,
      password: info.password,
      passwordCheck: info.passwordCheck
    };
    const SignUpRequest = new Request(`${env.ApiURL}signup`, {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(UserBody)
    });
    await fetch(SignUpRequest)
      .then(response => response.json())
      .then(response => {
        if (response.successful === true) {
          toast.success("Sign Up Successful!");
          setLoadingFlag.off();
          // window.location.replace("http://localhost:3000/");
        } else {
          toast.error("Sign Up Failed :(");
          setLoadingFlag.off();
        }
      });
  }

  function Next() {
    if (
      nameCheck(SignUpData.firstname) &&
      nameCheck(SignUpData.surname) &&
      emailCheck(SignUpData.email) &&
      passCheck(SignUpData.password) &&
      compareCheck(SignUpData.password, SignUpData.passwordCheck)
    ) {
      setLoadingFlag.on();
      SubmitData(SignUpData);
    } else {
      console.log("F");
    }

    return undefined;
  }

  function nameCheck(name: string | undefined) {
    if (name === undefined) {
      return false;
    } else {
      if (name.length > 1) {
        return true;
      } else {
        return false;
      }
    }
  }

  function emailCheck(email: string | undefined) {
    if (email === undefined) {
      return false;
    } else {
      if (
        email.includes("@") &&
        email.split("@")[1].includes(".") &&
        email.length > 6
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  function passCheck(pass: string | undefined) {
    if (pass === undefined) {
      return false;
    } else {
      if (pass.length > 4) {
        return true;
      } else {
        return false;
      }
    }
  }

  function compareCheck(
    pass: string | undefined,
    passCheck: string | undefined
  ) {
    if (pass === passCheck && pass != undefined) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Box>
      <Toaster />
      <NavBar />
      <Box
        marginTop={[20]}
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
          SignUp
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
            placeholder="First Name"
            id={"FirstName"}
            value={SignUpData.firstname}
            onChange={e => {
              setSignUpData(prev => ({ ...prev, firstname: e.target.value }));
              if (nameCheck(e.target.value)) {
                setParamErrs(prevState => ({ ...prevState, firstname: false }));
              } else {
                setParamErrs(prevState => ({ ...prevState, firstname: true }));
              }
            }}
            borderColor={paramErrs.firstname ? "red.500" : "white"}
            borderRadius={[18]}
            borderWidth={2}
            width={[450]}
            fontSize={[20]}
            marginTop={[6]}
          ></Input>
          <Input
            placeholder="Surname"
            value={SignUpData.surname}
            id={"surname"}
            onChange={e => {
              setSignUpData(prev => ({ ...prev, surname: e.target.value }));
              if (nameCheck(e.target.value)) {
                setParamErrs(prevState => ({ ...prevState, surname: false }));
              } else {
                setParamErrs(prevState => ({ ...prevState, surname: true }));
              }
            }}
            borderColor={paramErrs.surname ? "red.500" : "white"}
            borderRadius={[18]}
            width={[450]}
            fontSize={[20]}
            marginTop={[5]}
            borderWidth={2}
          ></Input>
          <Input
            placeholder="Email"
            id={"email"}
            type={"text"}
            value={SignUpData.email}
            onChange={e => {
              setSignUpData(prev => ({ ...prev, email: e.target.value }));
              if (emailCheck(e.target.value)) {
                setParamErrs(prevState => ({ ...prevState, email: false }));
              } else {
                setParamErrs(prevState => ({ ...prevState, email: true }));
              }
            }}
            borderColor={paramErrs.email ? "red.500" : "white"}
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
              setSignUpData(prev => ({ ...prev, password: e.target.value }));
              //TODO make the password check a lot more dignified than just if the password is more than one character lol
              if (passCheck(e.target.value)) {
                setParamErrs(prevState => ({ ...prevState, password: false }));
              } else {
                setParamErrs(prevState => ({ ...prevState, password: true }));
              }
            }}
            borderColor={paramErrs.password ? "red.500" : "white"}
            borderRadius={[18]}
            width={[450]}
            fontSize={[20]}
            marginTop={[5]}
            borderWidth={2}
          ></Input>
          <Input
            placeholder="Confirm Password"
            value={SignUpData.passwordCheck}
            type={"password"}
            id={"passCheck"}
            onChange={e => {
              setSignUpData(prev => ({
                ...prev,
                passwordCheck: e.target.value
              }));
              // @ts-ignore
              if (compareCheck(SignUpData.password, e.target.value)) {
                setParamErrs(prevState => ({
                  ...prevState,
                  passwordCheck: false
                }));
              } else {
                setParamErrs(prevState => ({
                  ...prevState,
                  passwordCheck: true
                }));
              }
            }}
            borderColor={paramErrs.passwordCheck ? "red.500" : "white"}
            borderRadius={[18]}
            width={[450]}
            fontSize={[20]}
            marginTop={[5]}
            borderWidth={2}
          ></Input>
          <Button
            isLoading={Loadingflag}
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
            onClick={Next}
          >
            Next
          </Button>
          {/*TODO Change this link from local host to main domain*/}
          <Link fontSize={[15]} marginTop={[1]} href={`${env.URL}terms`}>
            By Signing up you agree to our Terms.
          </Link>
          <Link
            marginTop={[2]}
            fontSize={[20]}
            variant={"link"}
            href={`${env.URL}login`}
          >
            <Text color={"#0088FF"} marginLeft={2}>
              Have an Account? Log In
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
