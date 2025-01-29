import { Text } from "@chakra-ui/react";
import React from "react";

const OccupationText = ({ children }) => {
  return (
    <Text
      fontFamily="'Magra', sans-serif"  // Apply Magra font
      //fontSize="36px"
      fontSize={['15px', '15px', '36px']}  // Set font size to 36px
      fontWeight="400"  // Regular weight
      color="white"  // Set text color
    >
      {children}
    </Text>
  );
};

export default OccupationText;
