import { Text } from "@chakra-ui/react";
import React from "react";

const ItalicizedText = ({ children }) => {
  return (
    <Text
      fontFamily="'Inter', sans-serif"    // Apply Inter font
      fontSize={['4px', '8px', '20px']}   // Responsive font sizes (mobile, tablet, desktop)
      color="white"                       // Text color, change as needed
      //fontWeight="800"                    // Font weight for bold text
      fontStyle="italic"                  // Make the text italic
    >
      {children}
    </Text>
  );
};

export default ItalicizedText;
