import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Button, Center, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Chat from "./components/Chat";
import Login from "./components/Login";

export default function Home() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>MicroChat</title>
        <meta name="description" content="Micro Chat within a tweet size" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{user ? <Chat /> : <Login />}</main>
    </>
  );
}
