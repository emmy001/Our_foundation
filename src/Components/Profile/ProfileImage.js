import { Box, Image } from "@chakra-ui/react";
import React from "react";

const ProfileImage = ({ imagePaths, children }) => {
  return (
    <Box
      position="relative"  // Allows positioning of children relative to the container
      width={['222px', '333px', '444px']}  // Responsive width (mobile, tablet, desktop)
      height={['208px', '308px', '408px']}  // Responsive height (mobile, tablet, desktop)
      borderRadius="20px"  // Border radius
      overflow="hidden"    // Ensures children don’t overflow the container
    >
      {imagePaths.map((path, index) => (
        <Image
          key={index}
          src={path}   // Set image path
          alt={`Profile ${index}`}  // Alt text for the image
          width="100%"  // Fill the container width
          height="100%"  // Fill the container height
          objectFit="cover"  // Ensures the image fits within the dimensions without distortion
        />
      ))}
      {children}
    </Box>
  );
};

export default ProfileImage;
