// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "'Inter', sans-serif", // Font for headings
    body:"'Inter', sans-serif",    // Font for body text
    h4: "'Lovers Quarrel', cursive"
  },
  // Add other theme customizations here
});

export default theme;
