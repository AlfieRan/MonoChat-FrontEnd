import useSWR from "swr";
import { date } from "yup";

export function getChatInfo(Chatid: string) {
  return useSWR<{ id: string; chatname: string }>(`chats/info?id=${Chatid}`);
}

export function getMessageIds(Chatid: string) {
  return useSWR<{ messages: string[] }>(`chats/messages?id=${Chatid}`);
}

export function getMessageInfo(Messageid: string) {
  return useSWR<{ content: string; userId: string; createdAt: string }>(
    `message/info?id=${Messageid}`
  );
}
