import { Service, UserInfo } from "./types";
import { useState, useEffect } from "react";

export const fetcher = (endpoint: string) =>
  fetch(endpoint)
    .then((response) => response.json())
    .then((res) => res.payload);

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

//     fetch(`http://localhost:8000/search/?q=${searchTerm}`)
//      .then((response) => response.json())
