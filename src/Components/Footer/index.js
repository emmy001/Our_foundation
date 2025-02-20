import { Box, Grid, Heading, Text, List, ListItem, Link, Flex, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.900" color="white" py={16}>
      <Box maxW="7xl" mx="auto" px={4}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={12}>
          <Box>
            <Heading as="h3" fontSize="xl" fontWeight="bold" mb={4}>
              GlobalHope Foundation
            </Heading>
            <Text color="gray.400">
              Making a difference in communities worldwide through sustainable
              development and empowerment initiatives.
            </Text>
          </Box>
          <Box>
            <Heading as="h4" fontSize="lg" fontWeight="bold" mb={4}>
              Quick Links
            </Heading>
            <List spacing={2}>
              <ListItem>
                <Link href="/about" color="gray.400" _hover={{ color: "white" }}>
                  About Us
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="gray.400" _hover={{ color: "white" }}>
                  Our Projects
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="gray.400" _hover={{ color: "white" }}>
                  Get Involved
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="gray.400" _hover={{ color: "white" }}>
                  Contact
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Heading as="h4" fontSize="lg" fontWeight="bold" mb={4}>
              Contact Us
            </Heading>
            <List spacing={2} color="gray.400">
              <ListItem>123 Hope Street</ListItem>
              <ListItem>Nairobi, NB 56808</ListItem>
              <ListItem>kajwangeinstein@gmail.com</ListItem>
              <ListItem>+254 7699 8444</ListItem>
            </List>
          </Box>
          <Box>
            <Heading as="h4" fontSize="lg" fontWeight="bold" mb={4}>
              Follow Us
            </Heading>
            <Flex gap={4}>
              <Link href="#" color="gray.400" _hover={{ color: "white" }}>
                <Icon as={FaFacebook} fontSize="xl" />
              </Link>
              <Link href="#" color="gray.400" _hover={{ color: "white" }}>
                <Icon as={FaTwitter} fontSize="xl" />
              </Link>
              <Link href="#" color="gray.400" _hover={{ color: "white" }}>
                <Icon as={FaInstagram} fontSize="xl" />
              </Link>
              <Link href="#" color="gray.400" _hover={{ color: "white" }}>
                <Icon as={FaLinkedin} fontSize="xl" />
              </Link>
            </Flex>
          </Box>
        </Grid>
        <Box borderTop="1px" borderColor="gray.800" mt={12} pt={8} textAlign="center" color="gray.400">
          <Text>&copy; 2024 GlobalHope Foundation. All rights reserved.</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;