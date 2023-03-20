import { SearchIcon } from "@chakra-ui/icons/dist/Search";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import LeftPanel from "./Left-Panel";
import ChatList from "./leftpanel/ChatList";
import Header from "./leftpanel/Header";
import SearchPanel from "./leftpanel/SearchPanel";
import { RightPanel } from "./Right-panel";

function Chat() {
  return (
    <Flex h="100vh">
      <LeftPanel />
      <RightPanel />
    </Flex>
  );
}

export default Chat;
