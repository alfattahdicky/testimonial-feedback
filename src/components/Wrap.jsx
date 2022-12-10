import { Flex, Box } from "@chakra-ui/react";

const Wrap = ({ children }) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      minHeight="100vh"
      overflowY="hidden"
      maxH="100%"
      position="relative"
      width="100%"
    >
      {children}
    </Flex>
  );
};

export default Wrap;
