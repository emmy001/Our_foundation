import { Text } from "@chakra-ui/react";
import React from "react";

const BodyText = ({ children }) => {
  return (
    <Text
      fontFamily="'Inter', sans-serif"  // Apply Inter font
      fontSize={['4px', '8px', '18px']}    // Responsive font sizes (mobile, tablet, desktop)
      color="white"                          // Text color, change as needed
      //fontWeight="100"
    >
      {children}
    </Text>
  );
};

export default BodyText;
