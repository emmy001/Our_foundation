import { Text } from "@chakra-ui/react";
import React from "react";

const ProfileTitles = ({ children }) => {
  return (
    <Text
      fontFamily="'Inter', sans-serif"  // Apply Inter font
      fontSize={['10px', '20px', '40px']}    // Responsive font sizes (mobile, tablet, desktop)
      color="white"                          // Text color, change as needed
      fontWeight="900"  // Apply Inter Black weight
    >
      {children}
    </Text>
  );
};

export default ProfileTitles;
