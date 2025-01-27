// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Lovers Quarrel', cursive`,  // Use Lovers Quarrel for headings
    body: `'Lovers Quarrel', cursive`,     // Use Lovers Quarrel for body text
  },
});

export default theme;
