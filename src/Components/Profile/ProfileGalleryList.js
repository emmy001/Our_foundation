import { Flex } from "@chakra-ui/react";
import ProfileGallery from './ProfileGallery';  // Assuming ProfileGallery is imported

// Video contents and Images
const imagePathsArray = [
  '/images/collection.png',
  '/images/collection.png',
  '/images/collection.png',
  '/images/collection.png',
  '/images/collection.png',
  '/images/collection.png',
  // Add more paths as needed
];

const ProfileGalleryList = () => {
  return (
    <Flex
      direction="row"        // Align items horizontally (default)
      justifyContent="space-between"  // Distribute space evenly between children
      alignItems="center"    // Align items vertically in the center
      gap="8px"             // Add spacing between the items (adjust as needed)
      wrap="wrap"            // Allows wrapping if items don’t fit in a single row
    >
      {imagePathsArray.map((imagePath, index) => (
        <ProfileGallery key={index} imagePaths={[imagePath]} />
      ))}
    </Flex>
  );
};

export default ProfileGalleryList;
