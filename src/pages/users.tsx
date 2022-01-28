import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Box, Text } from "@chakra-ui/react";
import * as env from "../env";
import { toast, Toaster } from "react-hot-toast";

interface UserInfo {
  name: string;
}

const Users = () => {
  const [UserInfo, SetUserInfo] = useState<UserInfo>({ name: "Loading..." });
  useEffect(() => {
    try {
      const QueryUserID = document.URL.split("?")[1].split("=")[1];
      updateUserInfo(QueryUserID);
    } catch (err) {
      console.log("No User Id supplied");
    }
  }, []);

  async function updateUserInfo(UID: string) {
    const FetchData = new Request(`${env.ApiURL}user?q=${UID}`, {
      method: "GET",
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json"
      }
    });
    await fetch(FetchData)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.successful === true) {
          SetUserInfo(response.payload);
        } else {
          SetUserInfo({ name: "No User Found" });
          toast.error("User not found.");
        }
      })
      .catch(e => {
        SetUserInfo({ name: e });
      });
  }

  return (
    <Box>
      <Toaster />
      <NavBar />
      <Text>{UserInfo.name}</Text>
    </Box>
  );
};

export default Users;
