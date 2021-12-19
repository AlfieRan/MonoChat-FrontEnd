import React from "react";

import { Box, Text, Heading } from "@chakra-ui/react";

const Terms = () => {
  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Heading marginTop={[5]} marginBottom={[3]}>
        Terms and Conditions
      </Heading>
      <Text>
        Any Content you create (messages, accounts, descriptions, etc) are your
        own creations and in no way my (Alfie Ranstead), MonoChat's or Mono's
        responsibility.
      </Text>
      <Text>
        Oh yeah and we collect the data you give us (name, email, anything you
        enter into a text box when we give you one)
      </Text>
    </Box>
  );
};

export default Terms;
