import { Box, Flex, FormLabel, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";

const categorys = ["Android", "Web", "Microcontroller"];

const Category = () => {
  const [categoryState, setCategoryState] = useState("");

  const handleChoose = (category) => {
    setCategoryState(category);
  };

  return (
    <>
      <FormLabel aria-label="category" pt="1.4rem">
        Category
      </FormLabel>
      <Box display="flex" gap="2">
        {categorys.map((category, index) => (
          <Box
            bgColor={categoryState !== category ? "gray.500" : "#050505"}
            width="max-content"
            maxWidth="100%"
            color="white"
            height="max-content"
            paddingInline="1rem"
            paddingBlock="0.3rem"
            borderRadius="5px"
            cursor="pointer"
            fontSize={{ base: "xs", md: "md" }}
            key={index}
            onClick={() => handleChoose(category)}
          >
            {category}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Category;
