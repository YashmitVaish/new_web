
 import React from 'react';
import { Box } from '@mui/material';

export default function Chief2() {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src="/images/Desktop - 1.svg"  // Use public path here
        alt="Chief Guest"
        sx={{
          width: '100%',
          height: 'auto',
          objectFit: "contain",
          objectPosition: 'center',
          display: 'block',
        }}
      />
    </Box>
  );
}
