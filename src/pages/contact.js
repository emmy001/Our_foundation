
import { Box, Button, Container, Flex, Grid, Heading, Icon, Input, Select, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <Box bg="gray.50" minH="100vh">
      {/* Header */}
      <Header/>

      {/* Page Title */}
      <Box bgGradient="linear(to-r, blue.50, blue.900)" color="white"  pt={8} py={16} textAlign="center">
        <Heading size="xl">Contact Us</Heading>
        <Text fontSize="xl">We&apos;d love to hear from you. Let&apos;s make a difference together.</Text>
      </Box>

      {/* Contact Info */}
      <Container maxW="7xl" mt={-8}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={6} bg="white" p={8} shadow="lg" borderRadius="lg">
          {[
            { icon: FaPhone, title: "Phone", detail: "+254 (769) 998-444" },
            { icon: FaEnvelope, title: "Email", detail: "contact@hopefoundation.org" },
            { icon: FaMapMarkerAlt, title: "Address", detail: "123 Charity Lane, KE" },
            { icon: FaClock, title: "Office Hours", detail: "Mon - Fri: 9 AM - 5 PM" },
          ].map((item, index) => (
            <VStack key={index} textAlign="center">
              <Icon as={item.icon} boxSize={10} color="blue.500" />
              <Heading size="md">{item.title}</Heading>
              <Text color="gray.600">{item.detail}</Text>
            </VStack>
          ))}
        </Grid>
      </Container>

      {/* Main Section */}
      <Container maxW="7xl" py={16}>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12}>
          {/* Contact Form */}
          <Box>
            <Heading size="lg" mb={6}>Send us a Message</Heading>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <Input placeholder="Full Name" size="lg" required />
                <Input type="email" placeholder="Email Address" size="lg" required />
                <Select placeholder="Subject" size="lg">
                  <option>General Inquiry</option>
                  <option>Donation</option>
                  <option>Volunteering</option>
                  <option>Partnership</option>
                </Select>
                <Textarea placeholder="Message" size="lg" rows={6} required />
                <Button type="submit" colorScheme="blue" size="lg">Send Message</Button>
              </Stack>
            </form>
          </Box>

          {/* Map */}
          <Box>
            <Heading size="lg" mb={6}>Our Location</Heading>
            <Box borderRadius="lg" overflow="hidden" h="500px" bg="gray.100">
              <img
                src="https://public.readdy.ai/ai/img_res/b93377623a7f96d7808d11bbb7d43166.jpg"
                alt="Location Map"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Grid>
      </Container>

      {/* Footer */}
      <Footer/>
    </Box>
  );
};

export default Contact;
