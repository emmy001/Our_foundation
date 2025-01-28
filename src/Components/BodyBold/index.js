import { Text } from "@chakra-ui/react";
import React from "react";

const BodyText = ({ children }) => {
  return (
    <Text
      fontFamily="'Inter', sans-serif"  // Apply Inter font
      fontSize={['17px', '20px', '30px']}    // Responsive font sizes (mobile, tablet, desktop)
      color="white"                          // Text color, change as needed
      fontWeight="700"  // Apply Inter Black weight
      mb={4}
    >
      {children}
    </Text>
  );
};

export default BodyText;
