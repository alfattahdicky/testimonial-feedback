import { Heading, Text } from "@chakra-ui/react";
import React from "react";

const HeaderForm = () => {
  return (
    <>
      <Heading
        as="h1"
        fontWeight="bold"
        fontSize={{ base: "2rem", lg: "2.3rem" }}
      >
        Testimonial Form
      </Heading>
      <Text as="p" pt="0.5rem" fontSize={["0.875rem", "1rem"]}>
        This is form testimonial for feedback freelance
      </Text>
      <Text as="p" pt='-0.4rem' fontSize={["0.875rem", "1rem"]}>
        You fill out form <b>just once</b>. Thank You.
      </Text>
    </>
  );
};

export default React.memo(HeaderForm);
