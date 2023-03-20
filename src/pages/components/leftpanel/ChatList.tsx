import { Stack, StackDivider } from "@chakra-ui/react";
import React from "react";
import Chat from "./Chat";
import { chatData } from "./chatdata";

interface ChatListProps {
    flex:any
    overflow:string
}

function ChatList({flex,overflow}: ChatListProps) {
  return (
    <Stack
      spacing="0"
      pr="1"
      flex={flex}
      overflow={overflow}
      divider={<StackDivider w="82%" alignSelf="flex-end" />}
    >
      {chatData.map((item, index) => (
        <Chat
          key={index}
          src={item.src}
          date={item.date}
          name={item.name}
          seen={item.seen}
          message={item.message}
        />
      ))}
    </Stack>
  );
}

export default ChatList;
