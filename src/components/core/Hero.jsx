import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Image
      src="/feedback.jpg"
      loading="lazy"
      objectFit="contain"
      objectPosition="center"
      width={{ base: "100%", md: "100%" }}
      minHeight={{ base: "50vh", md: "100vh" }}
      bgImage="linear-gradient(to bottom, #222 50%, #fff)"
      overflowY="hidden"
    />
  );
};

export default React.memo(Hero);
