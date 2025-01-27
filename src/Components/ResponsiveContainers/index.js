import { Box } from "@chakra-ui/react";

const ResponsiveContainer = ({ children }) => {
  return (
    <Box
      w={["95%", "90%", "90%"]}   // Responsive width: mobile, tablet, desktop
      //maxW="1400px"               // Max width for larger screens
      //maxH="80vh"  // Limits the container's height to enable scrolling
      //minH="200vh"
      overflowY="auto"  // Allows vertical scrolling
      mt="50px"                      // Align
      mb="50px"
      mx="auto" // Center it horizontally
      alignItems="center"
      justifyContent="center"
      p={[2, 4, 8]}               // Responsive padding: mobile, tablet, desktop
      bg="gray.100"               // Background color for visual aid
      boxShadow="md"              // Add a shadow for effect
      bgColor="rgba(255, 255, 255, 0.1)"
      bgopacity="0.04" // White fill with 8% opacity
      borderRadius="20px 20px 20px 20px"
      border="2px solid rgba(255, 255, 255, 0.1)" // 10% white border opacity
      backdropFilter="blur(20.4px)" // Background blur
    >
      {children}
    </Box>
  );
};

export default ResponsiveContainer;
