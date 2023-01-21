import { Center, Heading, Text } from "@chakra-ui/react";
import Fireworks from "@fireworks-js/react";
import React from "react";

const ThankYou = () => {
  return (
    <>
      <Center h='100vh' flexDirection='column' textAlign='center'>
        <Heading
          as='h1'
          fontWeight='bold'
          fontSize={{ base: "2rem", md: "3rem" }}
          textTransform='uppercase'
        >
          Thank You For Fill Feedback Form.
        </Heading>
        <Text
          mt='1rem'
          fontWeight='600'
          fontSize={{ base: "1rem", md: "1.5rem" }}
        >
          This Feedback will show in my personal website, Cheers.
        </Text>
        <Fireworks
          options={{
            rocketsPoint: {
              min: 0,
              max: 50,
            },
            autoresize: true,
          }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: "-1",
          }}
        />
      </Center>
    </>
  );
};

export default ThankYou;
