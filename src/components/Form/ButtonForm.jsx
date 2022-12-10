import { Button } from "@chakra-ui/react";
import React from "react";

const ButtonForm = (props) => {
  return (
    <Button
      _hover={{ backgroundColor: "#050505" }}
      _focus={{ backgroundColor: "#050505" }}
      bgColor="gray.500"
      color="white"
      {...props}
      onClick={props.handleClick}
    >
      {props.text}
    </Button>
  );
};

export default ButtonForm;
