import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";

interface ChatProps {
  name: string;
  message: string;
  date: string;
  seen: boolean;
  src: string;
}

function Chat({ name, message, date, seen, src }: ChatProps) {
  return (
    <HStack py="3">
      <Avatar mx="3" name={name} src={src} />
      <Box flex="1" pr="4">
        <Flex justify="space-between" align="baseline">
          <Box>
            <Text fontWeight="medium">{name}</Text>
            <Text color="gray.300" fontSize="sm">
              {message}
            </Text>
          </Box>
        </Flex>
      </Box>
    </HStack>
  );
}

export default Chat;
