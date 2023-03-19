import { Button } from "@chakra-ui/react";
import React from "react";

function Chat() {
  return (
    <a href="/api/auth/logout">
      <Button colorScheme="teal" size="lg">
        Logout
      </Button>
    </a>
  );
}

export default Chat;
