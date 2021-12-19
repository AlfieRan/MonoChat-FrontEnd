import React from "react";
import { Box, Heading, Text, Input, Button, Link } from "@chakra-ui/react";
import * as yup from "yup";

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
  firstname?: string;
  surname?: string;
  email?: string;
  password?: string;
  passwordCheck?: string;
}

const SignUp = () => {
  let SignUpData: User = {};

  function Next() {
    console.log(SignUpData);

    return undefined;
  }

  function nameCheck(name: string) {
    if (name.length > 1) {
      return true;
    } else {
      return false;
    }
  }

  function emailCheck(email: string) {
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

  function passCheck(pass: string) {
    if (pass.length > 4) {
      return true;
    } else {
      return false;
    }
  }

  function compareCheck(pass: string | null, passCheck: string) {
    if (pass === passCheck) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Box
      marginTop={[20]}
      bg="#222222"
      minH="100vh"
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
        height={[440]}
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
            SignUpData.firstname = e.target.value;
            if (nameCheck(SignUpData.firstname)) {
              // @ts-ignore
              document.getElementById("FirstName").style.borderColor =
                "#00FF55";
            } else {
              // @ts-ignore
              document.getElementById("FirstName").style.borderColor =
                "#FF2222";
            }
          }}
          borderRadius={[18]}
          width={[450]}
          fontSize={[20]}
          marginTop={[6]}
        ></Input>
        <Input
          placeholder="Surname"
          value={SignUpData.surname}
          id={"surname"}
          onChange={e => {
            SignUpData.surname = e.target.value;
            if (nameCheck(SignUpData.surname)) {
              // @ts-ignore
              document.getElementById("surname").style.borderColor = "#00FF55";
            } else {
              // @ts-ignore
              document.getElementById("surname").style.borderColor = "#FF2222";
            }
          }}
          borderRadius={[18]}
          width={[450]}
          fontSize={[20]}
          marginTop={[5]}
        ></Input>
        <Input
          placeholder="Email"
          id={"email"}
          value={SignUpData.email}
          onChange={e => {
            SignUpData.email = e.target.value;
            if (emailCheck(SignUpData.email)) {
              // @ts-ignore
              document.getElementById("email").style.borderColor = "#00FF55";
            } else {
              // @ts-ignore
              document.getElementById("email").style.borderColor = "#FF2222";
            }
          }}
          borderRadius={[18]}
          width={[450]}
          fontSize={[20]}
          marginTop={[5]}
        ></Input>
        <Input
          placeholder="Password"
          type={"password"}
          id={"pass"}
          value={SignUpData.password}
          onChange={e => {
            SignUpData.password = e.target.value;
            //TODO make the password check a lot more dignified than just if the password is more than one character lol
            if (passCheck(SignUpData.password)) {
              // @ts-ignore
              document.getElementById("pass").style.borderColor = "#00FF55";
            } else {
              // @ts-ignore
              document.getElementById("pass").style.borderColor = "#FF2222";
            }
          }}
          borderRadius={[18]}
          width={[450]}
          fontSize={[20]}
          marginTop={[5]}
        ></Input>
        <Input
          placeholder="Confirm Password"
          value={SignUpData.passwordCheck}
          type={"password"}
          id={"passCheck"}
          onChange={e => {
            SignUpData.passwordCheck = e.target.value;
            if (compareCheck(SignUpData.password, SignUpData.passwordCheck)) {
              // @ts-ignore
              document.getElementById("passCheck").style.borderColor =
                "#00FF55";
            } else {
              // @ts-ignore
              document.getElementById("passCheck").style.borderColor =
                "#FF2222";
            }
          }}
          borderRadius={[18]}
          width={[450]}
          fontSize={[20]}
          marginTop={[5]}
        ></Input>
        <Button
          borderRadius={25}
          width={[450]}
          fontSize={[25]}
          marginTop={[5]}
          background={"#0055FF"}
          _hover={{ bg: "#003399" }}
          onClick={Next}
        >
          Next
        </Button>
        {/*TODO Change this link from local host to main domain*/}
        <Link
          fontSize={[15]}
          marginTop={[1]}
          href={"http://localhost:3000/terms"}
        >
          By Signing up you agree to our Terms.
        </Link>
        <Link marginTop={[2]} fontSize={[20]} variant={"link"}>
          <Text
            color={"#0088FF"}
            marginLeft={2}
            href={"http://localhost:3000/login"}
          >
            Have an Account? Log In
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default SignUp;
