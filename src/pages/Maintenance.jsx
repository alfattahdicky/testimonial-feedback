import { Center, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Maintenance = () => {
  return (
    <>
      <Center h='100vh' flexDirection='column' textAlign='center'>
        <Heading
          as='h1'
          fontWeight='bold'
          fontSize={{ base: "2rem", md: "3rem" }}
          textTransform='uppercase'>
          Maintenance Website
        </Heading>
        <Text
          mt='1rem'
          fontWeight='600'
          fontSize={{ base: "1rem", md: "1.5rem" }}>
          Sorry, this website is under maintenance.
        </Text>
      </Center>
    </>
  );
};

export default Maintenance;
