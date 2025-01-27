import { Box } from "@chakra-ui/react";

const ResponsiveContents = ({ children }) => {
  return (
    <Box
      //w={["95%", "90%", "90%"]}   // Responsive width: mobile, tablet, desktop
      minWidth={["80%", "80%", "45%"]}  // Ensures the container doesn't shrink below this width on mobile, tablet, desktop
      maxWidth="95%"                    // Prevents the container from growing too wide, keeping it responsive
      width="fit-content"               // Adjusts based on the content inside
      mx="auto"
      //maxW="1400px"               // Max width for larger screens
      maxH="80vh"  // Limits the container's height to enable scrolling
      overflowY="auto"  // Allows vertical scrolling
      mt={8}                      // Align
      alignItems="center"
      p={[2, 4, 8]}               // Responsive padding: mobile, tablet, desktop
      bg="gray.100"               // Background color for visual aid
      boxShadow="md"              // Add a shadow for effect
      bgColor="rgba(255, 255, 255, 0.02)"
      //bgOpacity="0.01" // White fill with 8% opacity
      borderRadius="20px 20px 20px 20px"
      border="2px solid rgba(255, 255, 255, 0.1)" // 10% white border opacity
      //backdropFilter="blur(10.4px)" // Background blur
    >
      {children}
    </Box>
  );
};

export default ResponsiveContents;
