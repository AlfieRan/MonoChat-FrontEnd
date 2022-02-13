import React, { useEffect, useState } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import CookieRequest from "../components/cookies/CookieRequest";
import CookiesAccepted from "../components/cookies/CookiesAccepted";
import CookiesDisabled from "../components/cookies/CookiesDisabled";
import { useRouter } from "next/router";
import { returnAddressType } from "../utils/types";

interface Pages {
  noChoice: boolean;
  enabled: boolean;
  disabled: boolean;
}

const cookies = (props: { hidden?: boolean }) => {
  const router = useRouter();

  if (props.hidden) {
    return null;
  }

  const [whichPage, setWhichPage] = useState<Pages>({
    noChoice: true,
    enabled: false,
    disabled: false,
  });

  const [returnAddress, setReturnAddress] = useState<returnAddressType>({
    hasAddress: false,
  });

  function checkLocal() {
    const storageData = JSON.parse(
      localStorage.getItem("enable_cookies") as string
    );
    if (storageData === true) {
      setWhichPage({ noChoice: false, enabled: true, disabled: false });
    } else if (storageData === false) {
      setWhichPage({ noChoice: false, enabled: false, disabled: true });
    }
  }

  useEffect(() => {
    checkLocal();
    const returnAddress = router.query.from as string;
    if (returnAddress != " " && returnAddress != "") {
      setReturnAddress({ hasAddress: true, Address: returnAddress });
    }
  }, []);

  return (
    <Box>
      <CookieRequest hidden={!whichPage.noChoice} retAddress={returnAddress} />
      <CookiesAccepted hidden={!whichPage.enabled} />
      <CookiesDisabled
        hidden={!whichPage.disabled}
        retAddress={returnAddress}
      />
    </Box>
  );
};

export default cookies;
