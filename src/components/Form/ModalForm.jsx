import {
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  Box,
} from "@chakra-ui/react";
import { AiFillFire } from "react-icons/ai";

const ModalForm = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
      <ModalOverlay />
      <ModalContent h="20rem">
        <ModalCloseButton />
        <ModalBody
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <IconButton
            icon={<AiFillFire />}
            bgColor="transparent"
            fontSize="5rem"
          />
          <Box mt="2rem">
            <Heading as="h1" fontWeight="bold" fontSize="2rem">
              Thank You For Submitting Form
            </Heading>
            <Text mt="0.4rem">This Feedback will show in my personal website, Cheers</Text>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;
