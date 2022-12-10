import { Box, FormLabel, Image, Input, Text, Button } from "@chakra-ui/react";
import ButtonForm from "./ButtonForm";

const ImageUpload = ({ handleInputImage, image }) => {
  return (
    <>
      <FormLabel aria-label="image" pt="1.4rem">
        Your Image
      </FormLabel>
      <Box
        bgColor="transparent"
        maxW="24rem"
        border="1px dashed gray"
        position="relative"
        w="100%"
        height="8rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="8px"
        cursor="pointer"
      >
        <Input
          type="file"
          size="md"
          height="8rem"
          padding="2rem"
          opacity="0"
          position="absolute"
          cursor="pointer"
          onChange={handleInputImage}
        />
        <Image
          src={image ?? ""}
          display={image ? "block" : "none"}
          w="100%"
          h="100%"
        />
        <Text display={image ? "none" : "block"}>
          Place Image Here Format jpg
        </Text>
      </Box>
      <Text as="p" fontSize="0.7rem" mt="0.2rem">
        Click Again to Change Your Image
      </Text>
      <ButtonForm mt="0.8rem" text="Upload" />
    </>
  );
};

export default ImageUpload;
