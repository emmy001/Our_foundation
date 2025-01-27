// components/IconNav.js
import React from 'react';
import { Flex, Text, Box, Image } from '@chakra-ui/react';

const IconNav = () => {
  return (
    <Flex
      as="nav"
      bg="transparent"
      //p={0}
      direction="column"
      align="center"
    >
      <Flex
        //width="100%"
        alignItems="center"
        justify="space-between" // Ensure items are spaced out properly
        mb={5} // Margin bottom to create space between title/icons and "Family Website"
        mt="50px"
        mx="auto"
      >
        <Flex>
          <Box mx={2}>
            <Image src="/icons/facebook.png" alt="Icon 1" boxSize="24px" />
          </Box>
          <Box mx={2}>
            <Image src="/icons/linkedin.png" alt="Icon 2" boxSize="24px" />
          </Box>
          <Box mx={2}>
            <Image src="/icons/telegram.png" alt="Icon 3" boxSize="24px" />
          </Box>
          <Box mx={2}>
            <Image src="/icons/x.png" alt="Icon 4" boxSize="24px" />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default IconNav;
