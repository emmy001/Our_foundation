import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import * as echarts from "echarts";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Flex, Heading, Text, Image, Button, Grid, GridItem, Link, List, ListItem, Input, Icon, useBreakpointValue,} from "@chakra-ui/react";
import { FaHeart, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const About = () => {
  const chartRef = useRef(null);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  const timelineData = [
    {
      year: 2010,
      title: "Foundation Established",
      description:
        "Hope Foundation was founded by Sarah Mitchell with a vision to create lasting change.",
      image:
        "https://public.readdy.ai/ai/img_res/1cf45f33584bfe94d75c91a5017b0346.jpg",
    },
    {
      year: 2013,
      title: "First Major Project",
      description:
        "Launched our flagship education program reaching 10,000 children.",
      image:
        "https://public.readdy.ai/ai/img_res/03a7a842a88dba37d6d8c6e59e955bf0.jpg",
    },
    {
      year: 2016,
      title: "Global Expansion",
      description: "Extended operations to 15 countries across three continents.",
      image:
        "https://public.readdy.ai/ai/img_res/d3abbb029408b12c94413ed0cab3ff87.jpg",
    },
    {
      year: 2020,
      title: "Digital Revolution",
      description: "Transformed our programs to reach beneficiaries digitally.",
      image:
        "https://public.readdy.ai/ai/img_res/df69677e453fca06854430b03f928ee0.jpg",
    },
  ];

  const testimonials = [
    {
      quote:
        "The Foundation's support transformed our community. Their dedication to sustainable development has created lasting change.",
      author: "Hezbon Ajwang",
      role: "Kenyan Ambassador ",
      image:
        "images/Hezbon.jpg",
    },
    {
      quote:
        "Working with Hope Foundation opened doors for countless young people. Their approach to education is truly revolutionary.",
      author: "Austine Ajwang",
      role: "CTO AWOLS",
      image:
        "images/Austine.jpg",
    },
    {
      quote:
        "The impact of their healthcare initiatives in rural areas has been remarkable. They've set new standards in humanitarian aid.",
      author: "Beryl Ajwang",
      role: "Lead Engineer",
      image:
        "images/Beryl.jpg",
    },
    {
      quote:
        "The impact of their healthcare initiatives in rural areas has been remarkable. They've set new standards in humanitarian aid.",
      author: "Juliet Ajwang",
      role: "Professor University of Telaviv",
      image:
        "images/Juliet.jpg",
    },
  ];

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const option = {
        animation: false,
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "Impact Statistics",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Communities Served" },
              { value: 735, name: "Active Projects" },
              { value: 580, name: "Volunteers" },
              { value: 484, name: "Partner Organizations" },
            ],
          },
        ],
      };

      chart.setOption(option);

      return () => {
        chart.dispose();
      };
    }
  }, []);

  return (
    <Box minH="100vh" bg="white">
      {/* Header */}
      <Box as="header" position="fixed" top={0} w="full" bg="white" boxShadow="md" zIndex={50}>
        <Flex maxW="7xl" mx="auto" px={4} h={20} align="center" justify="space-between">
          <Flex align="center" gap={2}>
            <Icon as={FaHeart} color="rose.500" fontSize="3xl" />
            <Heading fontSize="2xl" fontWeight="bold" color="gray.800">
              Hope Foundation
            </Heading>
          </Flex>
          <Flex as="nav" gap={8} display={{ base: "none", md: "flex" }}>
            <Link href="/" color="gray.600" _hover={{ color: "rose.500" }}>
              Home
            </Link>
            <Link href="#" color="rose.500">
              About
            </Link>
            <Link href="#" color="gray.600" _hover={{ color: "rose.500" }}>
              Programs
            </Link>
            <Link href="#" color="gray.600" _hover={{ color: "rose.500" }}>
              Impact
            </Link>
            <Link href="#" color="gray.600" _hover={{ color: "rose.500" }}>
              Contact
            </Link>
          </Flex>
          <Button colorScheme="rose" px={6} py={2}>
            Donate Now
          </Button>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box
        pt={20}
        position="relative"
        h="600px"
        bgImage="url('https://public.readdy.ai/ai/img_res/ea506a006fb55200a1c6eda0a38a7908.jpg')"
        bgSize="cover"
        bgPosition="center"
      >
        <Box position="absolute" inset={0} bgGradient="linear(to-r, rose.500/90, rose.500/40)" />
        <Box position="relative" maxW="7xl" mx="auto" px={4} pt={20}>
          <Heading as="h1" fontSize="5xl" fontWeight="bold" color="white" mb={6}>
            About Our Foundation
          </Heading>
          <Text fontSize="xl" color="white" maxW="2xl">
            Since 2010,we&rsquo;ve been dedicated to creating positive change through education,
            healthcare, and community development. Our mission is to empower communities and
            transform lives across the globe.
          </Text>
        </Box>
      </Box>

      {/* Mission & Vision */}
      <Box py={20} bg="gray.50">
        <Box maxW="7xl" mx="auto" px={4}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={12} mb={20}>
            <Box>
              <Heading as="h2" fontSize="3xl" fontWeight="bold" color="gray.800" mb={6}>
                Our Mission
              </Heading>
              <Text fontSize="lg" color="gray.600" lineHeight="relaxed">
                To create sustainable change by empowering communities through education,
                healthcare, and economic development initiatives. We believe in building lasting
                solutions that continue to benefit generations to come.
              </Text>
            </Box>
            <Box borderRadius="lg" overflow="hidden" boxShadow="xl">
              <Image
                src="https://public.readdy.ai/ai/img_res/eb97450fe7ad2c651aa066baa2a8af56.jpg"
                alt="Mission"
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
          </Grid>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={12}>
            <Box order={{ base: 2, md: 1 }} borderRadius="lg" overflow="hidden" boxShadow="xl">
              <Image
                src="https://public.readdy.ai/ai/img_res/e569e164bf67dda20012d97efff82e08.jpg"
                alt="Vision"
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
            <Box order={{ base: 1, md: 2 }}>
              <Heading as="h2" fontSize="3xl" fontWeight="bold" color="gray.800" mb={6}>
                Our Vision
              </Heading>
              <Text fontSize="lg" color="gray.600" lineHeight="relaxed">
                We envision a world where every individual has access to quality education,
                healthcare, and opportunities for growth. Our goal is to be at the forefront of
                positive social change, inspiring others to join our cause.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>

      {/* Timeline */}
      <Box py={20} bg="white">
        <Box maxW="7xl" mx="auto" px={4}>
          <Heading as="h2" fontSize="3xl" fontWeight="bold" color="gray.800" textAlign="center" mb={12}>
            Our Journey
          </Heading>
          <Box position="relative">
            <Flex overflowX="auto" pb={8} gap={8}>
              {timelineData.map((item, index) => (
                <Box
                  key={item.year}
                  flex="none"
                  w="80"
                  bg="white"
                  borderRadius="lg"
                  boxShadow="lg"
                  transition="all 0.2s"
                  transform={activeTimelineIndex === index ? "scale(1.05)" : "scale(1)"}
                  onClick={() => setActiveTimelineIndex(index)}
                  cursor="pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    w="full"
                    h="48"
                    objectFit="cover"
                    borderTopRadius="lg"
                  />
                  <Box p={6}>
                    <Text color="rose.500" fontWeight="bold" fontSize="xl" mb={2}>
                      {item.year}
                    </Text>
                    <Heading as="h3" fontSize="xl" fontWeight="bold" mb={2}>
                      {item.title}
                    </Heading>
                    <Text color="gray.600">{item.description}</Text>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>

      {/* Impact Statistics */}
      <Box py={20} bg="gray.50">
        <Box maxW="7xl" mx="auto" px={4}>
          <Heading as="h2" fontSize="3xl" fontWeight="bold" color="gray.800" textAlign="center" mb={12}>
            Our Impact
          </Heading>
          <Box ref={chartRef} w="full" h="400px" />
        </Box>
      </Box>

      {/* Testimonials */}
      <Box py={20} bg="white">
        <Box maxW="7xl" mx="auto" px={4}>
          <Heading as="h2" fontSize="3xl" fontWeight="bold" color="gray.800" textAlign="center" mb={12}>
            What People Say
          </Heading>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            style={{ maxWidth: "4xl" }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Box bg="white" p={8} borderRadius="lg" textAlign="center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    w="24"
                    h="24"
                    borderRadius="full"
                    mx="auto"
                    mb={6}
                    objectFit="cover"
                  />
                  <Text color="gray.600" fontSize="lg" fontStyle="italic" mb={6}>
                    {testimonial.quote}
                  </Text>
                  <Heading as="h4" fontWeight="bold" color="gray.800">
                    {testimonial.author}
                  </Heading>
                  <Text color="gray.500">{testimonial.role}</Text>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

      {/* Call to Action */}
      <Box py={20} bg="rose.500">
        <Box maxW="7xl" mx="auto" px={4} textAlign="center">
          <Heading as="h2" fontSize="3xl" fontWeight="bold" color="white" mb={6}>
            Join Us in Making a Difference
          </Heading>
          <Text color="white" fontSize="lg" mb={8} maxW="2xl" mx="auto">
            Your support can help us continue our mission of creating positive change in
            communities worldwide.
          </Text>
          <Flex justify="center" gap={4}>
            <Button colorScheme="white" color="rose.500" px={8} py={3} fontSize="lg" fontWeight="bold">
              Get Involved
            </Button>
            <Button
              variant="outline"
              color="white"
              borderColor="white"
              px={8}
              py={3}
              fontSize="lg"
              fontWeight="bold"
              _hover={{ bg: "whiteAlpha.100" }}
            >
              Donate Now
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={12}>
        <Box maxW="7xl" mx="auto" px={4}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
            <Box>
              <Flex align="center" gap={2} mb={6}>
                <Icon as={FaHeart} color="rose.500" fontSize="3xl" />
                <Heading fontSize="2xl" fontWeight="bold">
                  Hope Foundation
                </Heading>
              </Flex>
              <Text color="gray.400">
                Making a difference in communities worldwide through sustainable development and
                empowerment.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" fontSize="lg" fontWeight="bold" mb={4}>
                Quick Links
              </Heading>
              <List spacing={2}>
                <ListItem>
                  <Link href="#" color="gray.400" _hover={{ color: "white" }}>
                    About Us
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" color="gray.400" _hover={{ color: "white" }}>
                    Programs
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
              <Heading as="h3" fontSize="lg" fontWeight="bold" mb={4}>
                Contact Us
              </Heading>
              <List spacing={2} color="gray.400">
                <ListItem>
                  <Icon as={FaMapMarkerAlt} mr={2} />
                  123 Hope Street, New York, NY 10001
                </ListItem>
                <ListItem>
                  <Icon as={FaPhone} mr={2} />
                  +1 (555) 123-4567
                </ListItem>
                <ListItem>
                  <Icon as={FaEnvelope} mr={2} />
                  info@hopefoundation.org
                </ListItem>
              </List>
            </Box>
            <Box>
              <Heading as="h3" fontSize="lg" fontWeight="bold" mb={4}>
                Newsletter
              </Heading>
              <Text color="gray.400" mb={4}>
                Stay updated with our latest news and updates.
              </Text>
              <Flex>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  bg="gray.700"
                  color="white"
                  px={4}
                  py={2}
                  borderTopLeftRadius="md"
                  borderBottomLeftRadius="md"
                  _focus={{ outline: "none" }}
                />
                <Button
                  colorScheme="rose"
                  px={4}
                  py={2}
                  borderTopRightRadius="md"
                  borderBottomRightRadius="md"
                >
                  Subscribe
                </Button>
              </Flex>
            </Box>
          </Grid>
          <Box borderTop="1px" borderColor="gray.700" mt={8} pt={8} textAlign="center" color="gray.400">
            <Text>&copy; 2024 Hope Foundation. All rights reserved.</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;