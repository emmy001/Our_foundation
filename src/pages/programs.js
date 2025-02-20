import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Grid,
    GridItem,
    Image,
    List,
    ListItem,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    useBreakpointValue,
    useColorModeValue, Link, Stack,
} from "@chakra-ui/react";
import {
  FaHeart,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowRight, // Added FaArrowRight
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Programs = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        animation: false,
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: ["2018", "2019", "2020", "2021", "2022", "2023"],
        },
        yAxis: {
          type: "value",
          name: "People Helped",
        },
        series: [
          {
            data: [2500, 3800, 5200, 7500, 9800, 12000],
            type: "line",
            smooth: true,
            color: "#4CAF50",
          },
        ],
      };
      chart.setOption(option);
    }
  }, []);

  return (
    <Box minH="100vh" bg="white">
      <Header/>

      {/* Hero Section */}
      <Box pt={20} position="relative" overflow="hidden">
        <Image
          src="https://public.readdy.ai/ai/img_res/94cc509b79ede5c77da6dac0c23ba276.jpg"
          alt="Hero background"
          w="full"
          h="full"
          objectFit="cover"
          objectPosition="center"
          position="absolute"
          inset={0}
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-r, whiteAlpha.900, whiteAlpha.500)"
        />
        <Box maxW="7xl" mx="auto" px={6} py={20} position="relative">
          <Box maxW="2xl">
            <Heading as="h1" fontSize="5xl" fontWeight="bold" color="gray.900" mb={6}>
              Empowering Communities Through Sustainable Change
            </Heading>
            <Text fontSize="xl" color="gray.700" mb={8}>
              Join us in creating lasting impact across communities worldwide. Together, we&apos;ve helped over 12,000
              families build better futures.
            </Text>
            <Flex gap={4}>
              <Button colorScheme="rose" size="lg">
                Get Involved
              </Button>
              <Button variant="outline" color="gray.800" size="lg" _hover={{ bg: "gray.100" }}>
                Learn More
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>

      {/* Impact Stats */}
      <Box bg="gray.50" py={16}>
        <Box maxW="7xl" mx="auto" px={6}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8} textAlign="center">
            {[
              { number: "12,000+", label: "Families Supported" },
              { number: "85", label: "Communities Served" },
              { number: "5,000+", label: "Active Volunteers" },
              { number: "$2.5M", label: "Funds Raised" },
            ].map((stat, index) => (
              <Box key={index}>
                <Heading as="div" fontSize="4xl" fontWeight="bold" color="rose.600" mb={2}>
                  {stat.number}
                </Heading>
                <Text color="gray.600">{stat.label}</Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Featured Programs */}
      <Box py={20} bg="white">
        <Box maxW="7xl" mx="auto" px={6}>
          <Heading as="h2" fontSize="3xl" fontWeight="bold" color="gray.900" textAlign="center" mb={12}>
            Our Featured Programs
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            {[
              {
                title: "Education Empowerment",
                image: "https://public.readdy.ai/ai/img_res/96d95b7997ffadbb27caab25dd94da03.jpg",
                description: "Providing quality education and resources to underprivileged children worldwide.",
              },
              {
                title: "Healthcare Access",
                image: "https://public.readdy.ai/ai/img_res/de052122ca334afabcdb6923ed4e85a0.jpg",
                description: "Ensuring communities have access to essential healthcare services and support.",
              },
              {
                title: "Sustainable Living",
                image: "https://public.readdy.ai/ai/img_res/065bc5563d37c420e1ae22915cb62597.jpg",
                description: "Promoting environmental consciousness and sustainable living practices.",
              },
            ].map((program, index) => (
              <Box key={index} bg="white" borderRadius="lg" boxShadow="lg" overflow="hidden">
                <Image src={program.image} alt={program.title} w="full" h="48" objectFit="cover" />
                <Box p={6}>
                  <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.900" mb={2}>
                    {program.title}
                  </Heading>
                  <Text color="gray.600" mb={4}>
                    {program.description}
                  </Text>
                  <Button variant="link" colorScheme="rose" rightIcon={<Icon as={FaArrowRight} />}>
                    Learn More
                  </Button>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Success Stories */}
      <Box bg="gray.50" py={20}>
        <Box maxW="7xl" mx="auto" px={6}>
          <Heading as="h2" fontSize="3xl" fontWeight="bold" color="gray.900" textAlign="center" mb={12}>
            Success Stories
          </Heading>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={useBreakpointValue({ base: 1, md: 1 })}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            mb={12}
          >
            {[
              {
                name: "Emily Richardson",
                location: "Kenya",
                quote:
                  "Thanks to the Education Empowerment program, I was able to complete my studies and now work as a teacher in my community.",
                image: "https://public.readdy.ai/ai/img_res/d00d1ed98df6bd234cc49092f59b830a.jpg",
              },
              {
                name: "James Anderson",
                location: "India",
                quote:
                  "The Healthcare Access initiative provided my family with essential medical care when we needed it most. We are forever grateful.",
                image: "https://public.readdy.ai/ai/img_res/6c42b31d9b847e817c74ec865d3d3ff0.jpg",
              },
              {
                name: "Sarah Martinez",
                location: "Brazil",
                quote:
                  "Through the Sustainable Living program, our community learned to create and maintain our own organic garden, transforming our lives.",
                image: "https://public.readdy.ai/ai/img_res/602534f9b4a4f2c74d745a8b94fec068.jpg",
              },
            ].map((story, index) => (
              <SwiperSlide key={index}>
                <Box bg="white" borderRadius="lg" boxShadow="lg" p={8} display="flex" flexDir={{ base: "column", md: "row" }} alignItems="center">
                  <Box w={{ base: "full", md: "1/3" }} mb={{ base: 6, md: 0 }}>
                    <Image src={story.image} alt={story.name} w="40" h="40" borderRadius="full" mx="auto" objectFit="cover" />
                  </Box>
                  <Box w={{ base: "full", md: "2/3" }} pl={{ base: 0, md: 8 }}>
                    <Text color="gray.600" fontSize="lg" fontStyle="italic" mb={4}>
                      {story.quote}
                    </Text>
                    <Text fontWeight="semibold" color="gray.900">
                      {story.name}
                    </Text>
                    <Text color="gray.500">{story.location}</Text>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

      {/* Impact Chart */}
      <Box py={20} bg="white">
        <Box maxW="7xl" mx="auto" px={6}>
          <Heading as="h2" fontSize="3xl" fontWeight="bold" color="gray.900" textAlign="center" mb={12}>
            Our Growing Impact
          </Heading>
          <Box ref={chartRef} w="full" h="400px" />
        </Box>
      </Box>

      {/* Volunteer Opportunities */}
      <Box bg="gray.50" py={20}>
        <Box maxW="7xl" mx="auto" px={6}>
          <Heading as="h2" fontSize="3xl" fontWeight="bold" color="gray.900" textAlign="center" mb={12}>
            Volunteer Opportunities
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={12}>
            <Box>
              <Heading as="h3" fontSize="2xl" fontWeight="semibold" color="gray.900" mb={4}>
                Join Our Community
              </Heading>
              <Text color="gray.600" mb={6}>
                Make a difference by volunteering with us. We offer various opportunities to match your skills and
                interests with communities in need.
              </Text>
              <Stack spacing={4}>
                <Flex align="center">
                  <Icon as={FaCheckCircle} color="rose.600" mr={3} />
                  <Text color="gray.700">Flexible time commitments</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={FaCheckCircle} color="rose.600" mr={3} />
                  <Text color="gray.700">Training provided</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={FaCheckCircle} color="rose.600" mr={3} />
                  <Text color="gray.700">Global opportunities</Text>
                </Flex>
              </Stack>
            </Box>
            <Box>
              <Stack spacing={6}>
                {[
                  {
                    role: "Education Mentor",
                    commitment: "5 hours/week",
                    location: "Remote/Online",
                  },
                  {
                    role: "Healthcare Assistant",
                    commitment: "10 hours/week",
                    location: "New York, USA",
                  },
                  {
                    role: "Community Organizer",
                    commitment: "8 hours/week",
                    location: "London, UK",
                  },
                ].map((position, index) => (
                  <Box key={index} bg="white" borderRadius="lg" boxShadow="lg" p={6}>
                    <Flex justify="space-between" align="start" mb={4}>
                      <Box>
                        <Heading as="h4" fontSize="xl" fontWeight="semibold" color="gray.900">
                          {position.role}
                        </Heading>
                        <Text color="gray.500">{position.commitment}</Text>
                        <Text color="gray.500">{position.location}</Text>
                      </Box>
                      <Button colorScheme="rose" size="sm">
                        Apply Now
                      </Button>
                    </Flex>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Box>
      </Box>

      {/* Donation Section */}
      <Box bg="blue.800" py={20} color="black">
        <Box maxW="7xl" mx="auto" px={6} textAlign="center">
          <Heading as="h2" fontSize="3xl" fontWeight="bold" mb={6}>
            Make a Difference Today
          </Heading>
          <Text fontSize="xl" mb={12} maxW="2xl" mx="auto">
            Your donation helps us continue our mission of empowering communities and creating lasting change.
          </Text>
          <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={4} maxW="2xl" mx="auto" mb={8}>
            {["$25", "$50", "$100", "$200"].map((amount, index) => (
              <Button key={index} bg="white" color="rose.600" _hover={{ bg: "gray.100" }}>
                {amount}
              </Button>
            ))}
          </Grid>
          <Button bg="white" color="rose.600" px={12} py={4} fontSize="xl" fontWeight="semibold" _hover={{ bg: "gray.100" }}>
            Donate Now
          </Button>
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

export default Programs;