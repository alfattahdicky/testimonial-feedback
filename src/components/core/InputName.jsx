import { FormLabel, Input, Box } from "@chakra-ui/react";

import React from "react";

const InputName = ({ title, placeholder, ...props }, ref) => {
  return (
    <Box pt="1rem">
      <FormLabel aria-label={title}>{title}</FormLabel>
      <Input
        type="text"
        borderColor="gray.500"
        placeholder={placeholder}
        isRequired
        width={{ base: "100%", md: "70%" }}
        {...props}
        ref={ref}
      />
    </Box>
  );
};

export default React.forwardRef(InputName);
