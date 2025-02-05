import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import { Box, Flex, Heading, Text, Button, Grid, GridItem, Input, InputGroup, Link, InputLeftElement, Radio, RadioGroup, Stack, List, ListItem, Icon, useColorModeValue,
} from "@chakra-ui/react";
import { FaHeart, FaUtensils, FaBook, FaPaypal, FaGooglePay, FaCreditCard, FaHospital, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("credit");

  useEffect(() => {
    const chartDom = document.getElementById("impact-chart");
    if (chartDom) {
      const myChart = echarts.init(chartDom);
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
            name: "Fund Allocation",
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
              { value: 75, name: "Direct Aid" },
              { value: 15, name: "Operations" },
              { value: 10, name: "Administration" },
            ],
          },
        ],
      };
      myChart.setOption(option);
    }
  }, []);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(0);
  };

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Box as="header" position="fixed" top={0} w="full" bg="white" boxShadow="md" zIndex={50}>
        <Box maxW="7xl" mx="auto" px={4} h={20} display="flex" alignItems="center" justifyContent="space-between">
          <Flex align="center" gap={2}>
            <Icon as={FaHeart} fontSize="3xl" color="rose.500" />
            <Heading fontSize="2xl" fontWeight="bold" color="gray.800">
              GlobalHope
            </Heading>
          </Flex>
          <Flex as="nav" gap={8} display={{ base: "none", md: "flex" }}>
            <Link href="#" color="gray.600" _hover={{ color: "rose.500" }}>
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
            <Button colorScheme="rose">Donate Now</Button>
          </Flex>
        </Box>
      </Box>

      {/* Hero Section */}
      <Box pt={20}>
        <Box
          position="relative"
          h="500px"
          bgImage="url('https://public.readdy.ai/ai/img_res/eaa0ab8c1647684210fd9ffbdb222273.jpg')"
          bgSize="cover"
          bgPosition="center"
        >
          <Box position="absolute" inset={0} bg="blackAlpha.500">
            <Box maxW="7xl" mx="auto" px={4} h="full" display="flex" alignItems="center">
              <Box color="white" maxW="2xl">
                <Heading as="h1" fontSize="5xl" fontWeight="bold" mb={6}>
                  Together We Can Make A Difference
                </Heading>
                <Text fontSize="xl" mb={8}>
                  Your donation helps us provide essential support to communities in need. Join us in creating positive
                  change around the world.
                </Text>
                <Button colorScheme="rose" size="lg">
                  Donate Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Main Content */}
      <Box maxW="7xl" mx="auto" px={4} py={16}>
        {/* Donation Amount Section */}
        <Box bg="white" borderRadius="lg" boxShadow="lg" p={8} mb={12}>
          <Heading as="h2" fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
            Choose Your Donation Amount
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={6} mb={8}>
            {[10, 25, 50, 100].map((amount) => (
              <Button
                key={amount}
                onClick={() => handleAmountSelect(amount)}
                variant="outline"
                p={6}
                textAlign="center"
                borderWidth={2}
                borderColor={selectedAmount === amount ? "rose.500" : "gray.200"}
                bg={selectedAmount === amount ? "rose.50" : "white"}
                _hover={{ borderColor: "rose.300" }}
              >
                <Box>
                  <Text fontSize="2xl" fontWeight="bold" mb={2}>
                    ${amount}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {amount === 10 && "Provides meals for one child"}
                    {amount === 25 && "Supports a family for a week"}
                    {amount === 50 && "Funds educational materials"}
                    {amount === 100 && "Enables medical care access"}
                  </Text>
                </Box>
              </Button>
            ))}
          </Grid>
          <Flex justify="center" mb={8}>
            <InputGroup maxW="64">
              <InputLeftElement pointerEvents="none" color="gray.500">
                $
              </InputLeftElement>
              <Input
                type="number"
                placeholder="Custom Amount"
                value={customAmount}
                onChange={handleCustomAmount}
                borderWidth={2}
                borderColor="gray.200"
                _focus={{ borderColor: "rose.500" }}
              />
            </InputGroup>
          </Flex>
        </Box>

        {/* Payment Section */}
        <Box bg="white" borderRadius="lg" boxShadow="lg" p={8} mb={12}>
          <Heading as="h2" fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
            Payment Method
          </Heading>
          <RadioGroup value={selectedPayment} onChange={setSelectedPayment} mb={8}>
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
              {["credit", "paypal", "google"].map((method) => (
                <Radio
                  key={method}
                  value={method}
                  size="lg"
                  colorScheme="rose"
                  borderWidth={2}
                  borderColor={selectedPayment === method ? "rose.500" : "gray.200"}
                  bg={selectedPayment === method ? "rose.50" : "white"}
                  _hover={{ borderColor: "rose.300" }}
                >
                  <Box textAlign="center">
                    <Icon
                      as={method === "credit" ? FaCreditCard : method === "paypal" ? FaPaypal : FaGooglePay}
                      fontSize="2xl"
                      mb={2}
                    />
                    <Text fontWeight="semibold">
                      {method === "credit" && "Credit Card"}
                      {method === "paypal" && "PayPal"}
                      {method === "google" && "Google Pay"}
                    </Text>
                  </Box>
                </Radio>
              ))}
            </Grid>
          </RadioGroup>
          {selectedPayment === "credit" && (
            <Box maxW="md" mx="auto">
              <Box mb={4}>
                <Text color="gray.700" mb={2}>
                  Card Number
                </Text>
                <Input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  borderWidth={2}
                  borderColor="gray.200"
                  _focus={{ borderColor: "rose.500" }}
                />
              </Box>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} mb={4}>
                <Box>
                  <Text color="gray.700" mb={2}>
                    Expiry Date
                  </Text>
                  <Input
                    type="text"
                    placeholder="MM/YY"
                    borderWidth={2}
                    borderColor="gray.200"
                    _focus={{ borderColor: "rose.500" }}
                  />
                </Box>
                <Box>
                  <Text color="gray.700" mb={2}>
                    CVV
                  </Text>
                  <Input
                    type="text"
                    placeholder="123"
                    borderWidth={2}
                    borderColor="gray.200"
                    _focus={{ borderColor: "rose.500" }}
                  />
                </Box>
              </Grid>
            </Box>
          )}
        </Box>

        {/* Donate Section */}
        <Box bg="white" borderRadius="lg" boxShadow="lg" p={8} mb={12}>
          <Heading as="h2" fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
            Your Impact
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={12}>
            <Box>
              <Heading as="h3" fontSize="2xl" fontWeight="bold" mb={4}>
                Fund Allocation
              </Heading>
              <Box id="impact-chart" h="400px" />
            </Box>
            <Box>
              <Heading as="h3" fontSize="2xl" fontWeight="bold" mb={4}>
                2023 Impact Statistics
              </Heading>
              <Stack spacing={6}>
                <Flex align="center">
                  <Icon as={FaUtensils} fontSize="3xl" color="rose.500" w={12} />
                  <Box ml={4}>
                    <Text fontSize="xl" fontWeight="bold">
                      250,000+
                    </Text>
                    <Text color="gray.600">Meals Provided</Text>
                  </Box>
                </Flex>
                <Flex align="center">
                  <Icon as={FaBook} fontSize="3xl" color="rose.500" w={12} />
                  <Box ml={4}>
                    <Text fontSize="xl" fontWeight="bold">
                      15,000+
                    </Text>
                    <Text color="gray.600">Children Educated</Text>
                  </Box>
                </Flex>
                <Flex align="center">
                  <Icon as={FaHospital} fontSize="3xl" color="rose.500" w={12} />
                  <Box ml={4}>
                    <Text fontSize="xl" fontWeight="bold">
                      35,000+
                    </Text>
                    <Text color="gray.600">Medical Treatments</Text>
                  </Box>
                </Flex>
              </Stack>
            </Box>
          </Grid>
        </Box>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={12}>
        <Box maxW="7xl" mx="auto" px={4}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
            <Box>
              <Flex align="center" gap={2} mb={4}>
                <Icon as={FaHeart} fontSize="2xl" color="rose.500" />
                <Heading fontSize="xl" fontWeight="bold">
                  GlobalHope
                </Heading>
              </Flex>
              <Text color="gray.400">Charity Registration: #12345-6789</Text>
              <Text color="gray.400">Making the world better since 1995</Text>
            </Box>
            <Box>
              <Heading as="h4" fontSize="lg" fontWeight="bold" mb={4}>
                Contact
              </Heading>
              <Stack spacing={2} color="gray.400">
                <Text>1234 Hope Street</Text>
                <Text>New York, NY 10001</Text>
                <Text>contact@globalhope.org</Text>
                <Text>+1 (555) 123-4567</Text>
              </Stack>
            </Box>
            <Box>
              <Heading as="h4" fontSize="lg" fontWeight="bold" mb={4}>
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
                    Impact Reports
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" color="gray.400" _hover={{ color: "white" }}>
                    Volunteer
                  </Link>
                </ListItem>
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
          <Box borderTop="1px" borderColor="gray.700" mt={8} pt={8} textAlign="center" color="gray.400">
            <Text>&copy; 2024 GlobalHope. All rights reserved.</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Donate;