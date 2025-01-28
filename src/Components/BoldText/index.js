import { Text } from "@chakra-ui/react";
import React from "react";

const BoldText = ({ children }) => {
  return (
    <Text
      fontFamily="'Inter', sans-serif"  // Apply Inter font
      fontSize={['10px', '15px', '20px']}    // Responsive font sizes (mobile, tablet, desktop)
      color="white"                          // Text color, change as needed
      fontWeight="800"
    >
      {children}
    </Text>
  );
};

export default BoldText;
