import { Box, FormLabel, Textarea } from "@chakra-ui/react";
import React from "react";

const Feedback = () => {
  return (
    <Box pt="1.2rem">
      <FormLabel>Feedback</FormLabel>
      <Textarea
        placeholder="Ex: Amazing help my android apps"
        resize="none"
        borderColor="gray.500"
        width={{ base: "100%", md: "70%" }}
        height="12rem"
      />
    </Box>
  );
};

export default Feedback;
