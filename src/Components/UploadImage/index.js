// Components/UploadImage.js
import React from 'react';
import { Input, FormControl, FormLabel } from '@chakra-ui/react';

const UploadImage = ({ onImageUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageUpload(file); // Pass the file to the parent component
    }
  };

  return (
    <FormControl>
      <FormLabel>Upload Image</FormLabel>
      <Input type="file" accept="image/*" onChange={handleFileChange} />
    </FormControl>
  );
};

export default UploadImage;