import { IconButton, Box, FormLabel, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";

const Rating = () => {
  const [indexStar, setIndexStar] = useState();
  const ratingChange = (rating) => {
    setIndexStar(rating);
  };

  return (
    <Box pt="1.2rem">
      <FormLabel>Rating</FormLabel>
      <ReactStars
        count={5}
        onChange={ratingChange}
        size={45}
        emptyIcon={<AiFillStar />}
        filledIcon={<AiFillStar />}
        activeColor="orange"
      />
      <Text fontSize="0.875rem" mt="0.3rem" color="orange.400">
        {indexStar ?? 0}/5 Rate
      </Text>
    </Box>
  );
};

export default Rating;
