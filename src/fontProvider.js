// fontProvider.js

import { extendTheme } from '@chakra-ui/react';

const fontProvider = extendTheme({
  fonts: {
    mainFont: "'Markazi Text', sans-serif",
    secondaryFont: "'Karla', sans-serif",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
});

export default fontProvider;
