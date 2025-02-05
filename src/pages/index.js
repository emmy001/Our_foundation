import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { Box, Flex, Heading, Text, Image, Button, Grid, GridItem, Link, List, ListItem, Input, Icon, useBreakpointValue, Progress, useColorModeValue } from "@chakra-ui/react";
import { FaHeart, FaGraduationCap, FaHospital, FaUtensils, FaBuilding, FaBars, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const chartRef = useRef(null);
  const donationChart = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      donationChart.current = echarts.init(chartRef.current);
      const option = {
        animation: false,
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "Donation Donate",
            type: "pie",
            radius: ["40%", "70%"],
            data: [
              { value: 45, name: "Education" },
              { value: 25, name: "Healthcare" },
              { value: 20, name: "Food Security" },
              { value: 10, name: "Infrastructure" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      donationChart.current.setOption(option);
    }
  }, []);

  return (
    <Box minH="100vh">
      {/* Header */}
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

      {/* Hero Section */}
      <Box position="relative" h="100vh">
        <Image
          src="https://public.readdy.ai/ai/img_res/64e19a11dd8c70062880661ebc302200.jpg"
          alt="Hero Background"
          w="full"
          h="full"
          objectFit="cover"
          objectPosition="top"
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-r, blue.900/80, transparent)"
        />
        <Box
          position="relative"
          maxW="7xl"
          mx="auto"
          px={4}
          h="full"
          display="flex"
          alignItems="center"
        >
          <Box maxW="2xl" color="white">
            <Heading as="h2" fontSize="5xl" fontWeight="bold" mb={6}>
              Empowering Communities, Transforming Lives
            </Heading>
            <Text fontSize="xl" mb={8}>
              Join us in creating lasting change through sustainable development
              and community empowerment initiatives worldwide.
            </Text>
            <Flex gap={4}>
              <Button colorScheme="blue" size="lg">
                Make a Donation
              </Button>
              <Button variant="outline" color="white" size="lg" _hover={{ bg: "white", color: "blue.900" }}>
                Learn More
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>

      {/* Donate Stats */}
      <Box py={16} bg="gray.50">
        <Box maxW="7xl" mx="auto" px={4}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
            {[
              { number: "2.5M+", label: "Lives Impacted" },
              { number: "150+", label: "Active Projects" },
              { number: "45", label: "Countries Reached" },
              { number: "100K+", label: "Regular Donors" },
            ].map((stat, index) => (
              <Box key={index} textAlign="center">
                <Heading as="h3" fontSize="4xl" fontWeight="bold" color="blue.600" mb={2}>
                  {stat.number}
                </Heading>
                <Text color="gray.600">{stat.label}</Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Featured Projects */}
      <Box py={16}>
        <Box maxW="7xl" mx="auto" px={4}>
          <Heading as="h2" fontSize="3xl" fontWeight="bold" textAlign="center" mb={12}>
            Our Featured Projects
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            {[
              {
                image: "https://public.readdy.ai/ai/img_res/6fb9e8ffbe98687d11fde68588398b87.jpg",
                title: "Digital Education Initiative",
                description: "Providing modern educational tools to underprivileged schools",
                progress: 75,
              },
              {
                image: "https://public.readdy.ai/ai/img_res/e7d5245c9360cd8abc637082dfd2ca91.jpg",
                title: "Healthcare Access Program",
                description: "Building sustainable healthcare facilities in remote areas",
                progress: 60,
              },
              {
                image: "https://public.readdy.ai/ai/img_res/9ab2f3cf9bc204aded3a28d54e7498f9.jpg",
                title: "Sustainable Agriculture",
                description: "Supporting local farmers with modern farming techniques",
                progress: 85,
              },
            ].map((project, index) => (
              <Box key={index} bg="white" borderRadius="lg" overflow="hidden" boxShadow="lg">
                <Image src={project.image} alt={project.title} w="full" h="48" objectFit="cover" />
                <Box p={6}>
                  <Heading as="h3" fontSize="xl" fontWeight="bold" mb={2}>
                    {project.title}
                  </Heading>
                  <Text color="gray.600" mb={4}>
                    {project.description}
                  </Text>
                  <Box mb={4}>
                    <Progress value={project.progress} size="sm" colorScheme="blue" borderRadius="full" />
                    <Text fontSize="sm" color="gray.600" mt={1}>
                      {project.progress}% funded
                    </Text>
                  </Box>
                  <Button colorScheme="blue" w="full">
                    Support Project
                  </Button>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Donation Donate */}
      <Box py={16} bg="gray.50">
        <Box maxW="7xl" mx="auto" px={4}>
          <Heading as="h2" fontSize="3xl" fontWeight="bold" textAlign="center" mb={12}>
            Your Donation Impact
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8} alignItems="center">
            <Box ref={chartRef} h="400px" />
            <Box>
              <Heading as="h3" fontSize="2xl" fontWeight="bold" mb={4}>
                How We Use Your Donations
              </Heading>
              <Text color="gray.600" mb={6}>
                Your generous contributions directly support our mission to
                create lasting positive change in communities worldwide. We
                ensure transparent allocation of funds across various critical
                sectors.
              </Text>
              <List spacing={4}>
                <ListItem display="flex" alignItems="center">
                  <Icon as={FaGraduationCap} color="blue.600" mr={3} />
                  <Text>45% supports educational initiatives</Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <Icon as={FaHospital} color="blue.600" mr={3} />
                  <Text>25% funds healthcare programs</Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <Icon as={FaUtensils} color="blue.600" mr={3} />
                  <Text>20% ensures food security</Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <Icon as={FaBuilding} color="blue.600" mr={3} />
                  <Text>10% develops infrastructure</Text>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Box>
      </Box>

      {/* Newsletter */}
      <Box py={16}>
        <Box maxW="7xl" mx="auto" px={4}>
          <Box bg="blue.600" borderRadius="lg" p={8} md={{ p: 12 }}>
            <Box maxW="2xl" mx="auto" textAlign="center">
              <Heading as="h2" fontSize="3xl" fontWeight="bold" color="white" mb={4}>
                Stay Updated with Our Mission
              </Heading>
              <Text color="whiteAlpha.900" mb={8}>
                Join our newsletter to receive updates about our projects and
                ways to get involved.
              </Text>
              <Flex direction={{ base: "column", md: "row" }} gap={4}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  bg="white"
                  borderRadius="lg"
                  px={4}
                  py={3}
                  border="none"
                />
                <Button colorScheme="white" color="blue.600" px={8} py={3}>
                  Subscribe Now
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
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
                <ListItem>New York, NY 10001</ListItem>
                <ListItem>contact@globalhope.org</ListItem>
                <ListItem>+1 (555) 123-4567</ListItem>
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

      {/* Floating Donate Button */}
      <Button
        position="fixed"
        bottom={8}
        right={8}
        colorScheme="blue"
        leftIcon={<Icon as={FaHeart} />}
        boxShadow="lg"
      >
        Donate Now
      </Button>
    </Box>
  );
};

export default Home;