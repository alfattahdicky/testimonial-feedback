import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import ButtonForm from "./ButtonForm";
import Category from "./Category";
import Feedback from "./Feedback";
import HeaderForm from "./HeaderForm";
import ImageUpload from "./ImageUpload";
import ModalForm from "./ModalForm";
import Rating from "./Rating";

const Form = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack
      ml={{ base: "1.2rem", md: "2.5rem" }}
      pr={{ base: "2rem" }}
      paddingTop={{ base: "1rem", md: "2rem" }}
      paddingBottom={{ base: "2rem", md: "2rem" }}
      width="100%"
    >
      <HeaderForm />
      <FormControl paddingTop="1rem">
        <FormLabel aria-label="name">Name</FormLabel>
        <Input
          type="text"
          borderColor="gray.500"
          placeholder="Ex: Fred"
          isRequired
          width={{ base: "100%", md: "70%" }}
        />
        <Category />
        <ImageUpload />
        <Rating />
        <Feedback />
        <ButtonForm
          type="submit"
          mt="1.2rem"
          text="Submit"
          handleClick={onOpen}
        />
        <ModalForm isOpen={isOpen} onClose={onClose} />
      </FormControl>
    </Stack>
  );
};

export default Form;
