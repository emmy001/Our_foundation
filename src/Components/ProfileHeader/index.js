import { Box, Flex, Image, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ProfileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();  // Chakra UI Modal hooks
  const [username, setUsername] = useState("");  // Username state
  const [password, setPassword] = useState("");  // Password state
  const [isSubmitting, setIsSubmitting] = useState(false);  // To show loading state
  const router = useRouter();  // For redirecting on successful login

  // Handle form submission (login)
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { username, password });  // Adjust API endpoint as necessary
      // If login is successful, store token and redirect to edit profile page
      //localStorage.setItem('authToken', token);
      console.log("Response Data:", response.data);  // Log the response data to verify the structure

      localStorage.setItem("token", response.data.token);
      router.push("/editProfile");  // Redirect to edit profile page
    } catch (error) {
      alert("Login failed! Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Flex
      width={['100%', '100%', '1250px']}
      height={['30px', '50px', '70px']}
      alignItems="center"
      justifyContent="space-between"
      px={2}
    >
      {/* Profile Section with Menu */}
      <Flex align="center" width="100%">
        <Image src="/logo/profile001.svg" alt="001" boxSize={['20px', '20px', '62px']} />

        {/* Menu Icon */}
        <Image
          src="/icons/menu.svg"
          alt="Menu"
          boxSize={['20px', '20px', '40px']}
          ml={['50px', '70px', '100px']}
          mr={['20px', '50px', '0']}
          cursor="pointer" // Adds pointer cursor
          onClick={onOpen} // Trigger the modal on click
        />
      </Flex>

      {/* Search Icon */}
      <Box>
        <Image src="/icons/search.svg" alt="Search" boxSize={['20px', '20px', '30px']} />
      </Box>

      {/* Modal for Login/Registration */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your Username"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </FormControl>

            <Button
              mt={4}
              colorScheme="blue"
              onClick={handleLogin}
              isLoading={isSubmitting}
              w="full"
            >
              Login
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ProfileHeader;
