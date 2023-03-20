import { useUser } from "@auth0/nextjs-auth0/client";
import { Avatar, Box } from "@chakra-ui/react";
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

interface Props {}

function Header({}: Props) {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Box bg="#128C7E" py="2" px="4" borderRight="1px solid #f2f2f2">
      <Avatar boxSize="40px" name={user?.name!} src={user?.picture!} />
    </Box>
  );
}

export default Header;
