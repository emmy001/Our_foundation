import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import * as echarts from "echarts";
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
  useBreakpointValue,
  Progress,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaHeart,
  FaProjectDiagram,
  FaHandHoldingUsd,
  FaGlobe,
  FaGraduationCap,
  FaHospital,
  FaSeedling,
  FaAward,
  FaCertificate,
  FaStar,
  FaTrophy,
  FaMedal,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Impact = () => {
  const chartRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentElement = document.querySelector(".stats-section");
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const option = {
        animation: false,
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Fund Distribution",
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
              { value: 1048, name: "Education" },
              { value: 735, name: "Healthcare" },
              { value: 580, name: "Environment" },
              { value: 484, name: "Community" },
              { value: 300, name: "Emergency Aid" },
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
      <Header/>
      {/* Hero Section */}
      <Box position="relative" h="600px" overflow="hidden">
        <Image
          src="https://public.readdy.ai/ai/img_res/1aa1294666fe4c0643e58298e190ca97.jpg"
          alt="Hero Background"
          w="full"
          h="full"
          objectFit="cover"
          position="absolute"
          inset={0}
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
          px={6}
          h="full"
          display="flex"
          alignItems="center"
        >
          <Box maxW="2xl" color="white">
            <Heading as="h1" fontSize="5xl" fontWeight="bold" mb={6}>
              Making Real Change Happen
            </Heading>
            <Text fontSize="xl" mb={8}>
              Together, we&rsquo;ve transformed countless lives through sustainable
              initiatives and community-driven projects. Join us in creating
              lasting positive impact.
            </Text>
            <Button
              colorScheme="yellow"
              color="blue.900"
              px={8}
              py={4}
              fontSize="lg"
              fontWeight="semibold"
              _hover={{ bg: "yellow.400" }}
            >
              Donate Now
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Stats Section */}
      <Box className="stats-section" py={20} bg="gray.50">
        <Box maxW="7xl" mx="auto" px={6}>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
            gap={8}
            textAlign="center"
          >
            {[
              { icon: FaHeart, number: 250000, text: "Lives Impacted" },
              { icon: FaProjectDiagram, number: 1500, text: "Projects Completed" },
              { icon: FaHandHoldingUsd, number: 25000000, text: "Funds Raised (USD)" },
              { icon: FaGlobe, number: 75, text: "Communities Served" },
            ].map((stat, index) => (
              <Box key={index}>
                <Icon as={stat.icon} fontSize="4xl" color="blue.600" mb={4} />
                <Heading as="div" fontSize="4xl" fontWeight="bold" color="gray.900" mb={2}>
                  {isVisible ? new Intl.NumberFormat().format(stat.number) : "0"}
                </Heading>
                <Text color="gray.600">{stat.text}</Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Success Stories */}
      <Box py={20}>
        <Box maxW="7xl" mx="auto" px={6}>
          <Heading as="h2" fontSize="4xl" fontWeight="bold" textAlign="center" mb={12}>
            Success Stories
          </Heading>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={useBreakpointValue({ base: 1, md: 3 })}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            mb={12}
          >
            {[
              {
                image: "https://public.readdy.ai/ai/img_res/e7482537f02f0d0f6195be0190df0e39.jpg",
                quote:
                  "The foundation's support transformed our village's education system. Now our children have access to quality learning.",
                name: "Sarah Mwangi",
                location: "Nairobi, Kenya",
              },
              {
                image: "https://public.readdy.ai/ai/img_res/20f6ceb3caec2403f8df745b61fe0c77.jpg",
                quote:
                  "Thanks to the agricultural program, our farm yield has tripled. We can now support our entire community.",
                name: "Raj Patel",
                location: "Gujarat, India",
              },
              {
                image: "https://public.readdy.ai/ai/img_res/e67d1719200a3c069f4bdcabd7e62ad4.jpg",
                quote:
                  "The new medical facility has brought hope to our community. We can now provide essential healthcare services.",
                name: "Maria Rodriguez",
                location: "Lima, Peru",
              },
            ].map((story, index) => (
              <SwiperSlide key={index}>
                <Box bg="white" borderRadius="lg" boxShadow="lg" overflow="hidden">
                  <Image
                    src={story.image}
                    alt={story.name}
                    w="full"
                    h="48"
                    objectFit="cover"
                    objectPosition="top"
                  />
                  <Box p={6}>
                    <Text color="gray.600" fontStyle="italic" mb={4}>
                      {story.quote}
                    </Text>
                    <Text fontWeight="semibold">{story.name}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {story.location}
                    </Text>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

      {/* Impact Visualization */}
      <Box py={20} bg="gray.50">
        <Box maxW="7xl" mx="auto" px={6}>
          <Heading as="h2" fontSize="4xl" fontWeight="bold" textAlign="center" mb={12}>
            Our Impact Distribution
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Box ref={chartRef} h="400px" />
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Heading as="h3" fontSize="2xl" fontWeight="semibold" mb={6}>
                How We Allocate Resources
              </Heading>
              <Text color="gray.600" mb={4}>
                We ensure transparent and effective distribution of funds across
                various sectors to maximize our impact. Our focus areas include
                education, healthcare, environmental conservation, community
                development, and emergency aid.
              </Text>
              <Text color="gray.600">
                Through strategic partnerships and careful planning, we&rsquo;ve
                maintained a balanced approach to address both immediate needs
                and long-term sustainable development goals.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>

      {/* Goals Section */}
      <Box py={20}>
        <Box maxW="7xl" mx="auto" px={6}>
          <Heading as="h2" fontSize="4xl" fontWeight="bold" textAlign="center" mb={12}>
            Our Future Goals
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            {[
              {
                icon: FaGraduationCap,
                title: "Education Initiative 2025",
                description: "Build 100 new schools in underserved communities",
                progress: 65,
              },
              {
                icon: FaHospital,
                title: "Healthcare Access Program",
                description: "Establish 50 mobile medical clinics",
                progress: 40,
              },
              {
                icon: FaSeedling,
                title: "Environmental Conservation",
                description: "Plant 1 million trees by 2026",
                progress: 75,
              },
            ].map((goal, index) => (
              <Box key={index} bg="white" borderRadius="lg" boxShadow="lg" p={6}>
                <Icon as={goal.icon} fontSize="3xl" color="blue.600" mb={4} />
                <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={2}>
                  {goal.title}
                </Heading>
                <Text color="gray.600" mb={4}>
                  {goal.description}
                </Text>
                <Progress value={goal.progress} size="sm" colorScheme="blue" borderRadius="full" />
                <Text fontSize="sm" color="gray.500" mt={2}>
                  {goal.progress}% Complete
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box position="relative" py={20}>
        <Image
          src="https://public.readdy.ai/ai/img_res/70e96d562f1300f5f0539ea7e2e66909.jpg"
          alt="CTA Background"
          w="full"
          h="full"
          objectFit="cover"
          position="absolute"
          inset={0}
        />
        <Box
          position="absolute"
          inset={0}
          bg="blue.900"
          opacity="0.8"
        />
        <Box position="relative" maxW="7xl" mx="auto" px={6} textAlign="center">
          <Heading as="h2" fontSize="4xl" fontWeight="bold" color="white" mb={6}>
            Be Part of the Change
          </Heading>
          <Text fontSize="xl" color="white" mb={8} maxW="2xl" mx="auto">
            Your support can help us continue making a difference in communities
            around the world. Join us in our mission to create lasting positive
            change.
          </Text>
          <Flex justify="center" gap={6}>
            <Button
              colorScheme="yellow"
              color="blue.900"
              px={8}
              py={4}
              fontSize="lg"
              fontWeight="semibold"
              _hover={{ bg: "yellow.400" }}
            >
              Donate Now
            </Button>
            <Button
              variant="outline"
              color="white"
              borderColor="white"
              px={8}
              py={4}
              fontSize="lg"
              fontWeight="semibold"
              _hover={{ bg: "whiteAlpha.100" }}
            >
              Get Involved
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* Recognition Bar */}
      <Box py={12} bg="gray.50">
        <Box maxW="7xl" mx="auto" px={6}>
          <Flex justify="space-between" align="center" wrap="wrap" gap={6}>
            {[
              { icon: FaAward, text: "Best NGO 2023" },
              { icon: FaCertificate, text: "ISO Certified" },
              { icon: FaStar, text: "Top Rated Charity" },
              { icon: FaTrophy, text: "Impact Excellence" },
              { icon: FaMedal, text: "Community Choice" },
            ].map((award, index) => (
              <Flex key={index} align="center">
                <Icon as={award.icon} fontSize="2xl" color="blue.600" mr={3} />
                <Text color="gray.600" fontWeight="medium">
                  {award.text}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>
      {/*Footer*/}
    <Footer/>
    </Box>
  );
};

export default Impact;