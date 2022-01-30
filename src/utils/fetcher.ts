import * as env from "../env";
import { ApiResponse, ErrorResponse, Method, SuccessResponse } from "./types";

// export const fetcher = (...args) => fetch(...args).then(res => res.json());

export async function fetcher<T>(
  method: Method,
  endpoint: string,
  body?: unknown
): Promise<SuccessResponse<T>> {
  const request = await fetch(`${env.ApiURL}${endpoint}`, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined
    // credentials: "include"
  });

  const json: ApiResponse<T> = await request.json();

  if (request.status >= 400 || !json.successful) {
    throw new Error(`${(json as ErrorResponse).error}`);
  }

  return json;
}

//     fetch(`http://localhost:8000/search/?q=${searchTerm}`)
//      .then((response) => response.json())
