import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import Link from 'next/link'; // Import Link from Next.js

const NavigationBar = () => {
  return (
    <Flex
      as="nav"
      bg="transparent"
      p={4}
      align="center"
      justify="flex-end"
      direction="row"
      wrap="wrap"
      mt={10}
      pt={0}
    >
      {[
        { href: "/", label: "Home" },
        { href: "/history", label: "History" },
        { href: "/profiles", label: "Profiles" },
        { href: "/events", label: "Events" },
      ].map((navItem) => (
        <Link href={navItem.href} key={navItem.label} passHref>
          <Box mx={5}>
            <Text
              fontSize="16px"
              fontWeight="bold"
              color="white"
              fontFamily="Inter, sans-serif"
              textTransform="uppercase"
              _hover={{ color: 'gray.300' }}
            >
              {navItem.label}
            </Text>
          </Box>
        </Link>
      ))}
    </Flex>
  );
};

export default NavigationBar;
