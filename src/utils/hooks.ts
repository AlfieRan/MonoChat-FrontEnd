import useSWR from "swr";
import { MessageInfo } from "./types";

export function getChatInfo(Chatid: string) {
  return useSWR<{ id: string; chatname: string }>(`chats/info?id=${Chatid}`);
}

export function getMessages(Chatid: string) {
  return useSWR<{
    messages: MessageInfo[];
  }>(`chats/messages?id=${Chatid}`);
}

export function getMessageInfo(Messageid: string) {
  return useSWR<{ content: string; userId: string; createdAt: string }>(
    `message/info?id=${Messageid}`
  );
}

export function GetUserToUserChat(userid: string) {
  return useSWR<{ chatid: string }>(`chats/info/usertouser?id:${userid}`);
}

export function GetRecentChats() {
  return useSWR<{ chats: { id: string; chatname: string }[] }>(
    `user/get/chats`
  );
}
