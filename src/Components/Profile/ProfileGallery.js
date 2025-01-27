import { Box, Image } from "@chakra-ui/react";
import React from "react";

const ProfileGallery = ({ imagePaths, children }) => {
  return (
    <Box
      position="relative"     // Allows positioning of children relative to the container
      width="169px"           // Fixed width of 169px
      height="235px"          // Fixed height of 235px
      borderRadius="8px"      // Rounded corners
      overflow="hidden"       // Ensures children and images don’t overflow the container
    >
      {imagePaths.map((path, index) => (
        <Image
          key={index}
          src={path}           // Set image path
          alt={`Profile ${index}`}  // Alt text for accessibility
          width="100%"         // Fill the container width
          height="100%"        // Fill the container height
          objectFit="cover"    // Ensures the image fits within the dimensions without distortion
          borderRadius="8px"   // Border radius for the image
        />
      ))}
        {children}
    </Box>
  );
};

export default ProfileGallery;
