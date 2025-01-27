import { Text } from "@chakra-ui/react";
import React from "react";

const ProfileName = ({ children }) => {
  return (
    <Text
      fontFamily="'Lovers Quarrel', cursive" // Apply Lovers Quarrel font
      fontSize={['20px', '40px', '80px']}    // Responsive font sizes (mobile, tablet, desktop)
      color="white"                          // Text color, change as needed
    >
      {children}
    </Text>
  );
};

export default ProfileName;
