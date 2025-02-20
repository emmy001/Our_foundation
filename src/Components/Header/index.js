import { Box, Flex, Heading, Link, Button, Icon } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="header"
      position="fixed"
      w="full"
      zIndex={50}
      transition="all 0.3s"
      bg={isScrolled ? "white" : "transparent"}
      boxShadow={isScrolled ? "md" : "none"}
    >
      <Box maxW="7xl" mx="auto" px={4} py={4}>
        <Flex align="center" justify="space-between">
          <Heading fontSize="2xl" fontWeight="bold" color="blue.600">
            GlobalHope Foundation
          </Heading>
          <Flex as="nav" gap={8} display={{ base: "none", md: "flex" }}>
            <Link href="/about" color="gray.700" _hover={{ color: "blue.600" }}>
              About
            </Link>
            <Link href="#" color="gray.700" _hover={{ color: "blue.600" }}>
              Projects
            </Link>
            <Link href="/programs" color="gray.700" _hover={{ color: "blue.600" }}>
              Programs
            </Link>
            <Link href="/impact" color="gray.700" _hover={{ color: "blue.600" }}>
              Impact
            </Link>
            <Link href="/donate" color="gray.700" _hover={{ color: "blue.600" }}>
              Volunteer
            </Link>
            <Link href="#" color="gray.700" _hover={{ color: "blue.600" }}>
              Contact
            </Link>
            <Button colorScheme="blue">Donate Now</Button>
          </Flex>
          <Button display={{ base: "block", md: "none" }} variant="ghost">
            <Icon as={FaBars} fontSize="2xl" />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
