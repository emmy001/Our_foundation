// src/components/ProfileItem.js
import { Flex } from "@chakra-ui/react";
import BoldText from "../BoldText";       // Adjust the import paths as necessary
import BodyText from "../BodyText";       // Adjust the import paths as necessary
import ItalicizedText from "../ItalicizedText";

const PersonalInfo = ({ label, value, isItalic = false }) => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      gap="10px"
      mb={2}
    >
      <BoldText>{label}</BoldText>
      {isItalic ? (
        <ItalicizedText>{value}</ItalicizedText>
      ) : (
        <BodyText>{value}</BodyText>
      )}
    </Flex>
  );
};

export default PersonalInfo;
