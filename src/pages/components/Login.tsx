import { Box, Button, Center, VStack } from "@chakra-ui/react";
import React from "react";

function Login() {
  return (
    <Center height="100vh" width="100vw" color="white">
      <Box border="1px" padding="2">
        <VStack>
          <h1>Welcome to Microchat.</h1>
          <h2>Login to send unlimted message in a most secure environment</h2>
          <a href="/api/auth/login">
            <Button colorScheme="teal" size="lg">
              Login
            </Button>
          </a>
        </VStack>
      </Box>
    </Center>
  );
}

export default Login;
