import { Service, Testing } from "./types";
import { useState, useEffect } from "react";

const RunConnectionTest = () => {
  const [result, setResult] = useState<Service<Testing>>({
    status: "loading",
  });

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((response) => response.json())
      .then((response) => setResult(response))
      .catch((error) => setResult({ status: "error", error }));
  }, []);
  console.log(result);
  return result;
};

export function exchangeTest() {
  const data = { greeting: "hello" };
  const options = {
    method: "POST",
    Headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:8000", options).catch((error) => console.log(error));
}

export default RunConnectionTest;
