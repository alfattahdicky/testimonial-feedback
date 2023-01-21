import { Box, FormLabel, Image, Input, Text, Button } from "@chakra-ui/react";
import ButtonForm from "./ButtonForm";

const ImageUpload = ({
  image,
  stateUpload = false,
  handleInputImage,
  handleUpload,
}) => {
  return (
    <>
      <FormLabel aria-label='image' pt='1.4rem'>
        Your Photo
        <Text fontSize='0.8rem'>Place Photo & Click Upload Photo</Text>
      </FormLabel>
      <Box
        bgColor='transparent'
        maxW='24rem'
        border='1px dashed gray'
        position='relative'
        w='100%'
        height='8rem'
        display='flex'
        alignItems='center'
        justifyContent='center'
        borderRadius='8px'
        cursor='pointer'
      >
        <Input
          type='file'
          size='md'
          accept='.jpg, .jpeg, .png'
          height='8rem'
          padding='2rem'
          opacity='0'
          position='absolute'
          cursor='pointer'
          onChange={handleInputImage}
        />
        <Image
          src={image ?? ""}
          display={image ? "block" : "none"}
          objectFit='contain'
          loading='lazy'
          w='100%'
          h='100%'
        />
        <Text display={image ? "none" : "block"}>
          Place Photo Here Format jpg, png, jpeg
        </Text>
      </Box>
      <Text as='p' fontSize='0.7rem' mt='0.2rem'>
        Click Again to Change Your Photo & Don't Forget Click Upload Photo Again 
      </Text>
      <ButtonForm
        mt='0.8rem'
        text='Upload Photo'
        isLoading={stateUpload}
        handleClick={handleUpload}
      />
    </>
  );
};

export default ImageUpload;
