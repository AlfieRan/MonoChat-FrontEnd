import useSWR from "swr";
import { MessageInfo, UserLogging } from "./types";
import { fetcher } from "./fetcher";

export function getChatInfo(Chatid: string) {
  return useSWR<{ id: string; chatname: string }>(`chats/info?id=${Chatid}`);
}

export function getMessages(Chatid: string) {
  return useSWR<{
    messages: MessageInfo[];
  }>(`chats/messages?id=${Chatid}`);
}

export async function checkUserLogin() {
  const status = await fetcher<UserLogging>("GET", "user/checkAuth");
  return status.data;
}
