
import React from 'react';
import { Box } from '@mui/material';
import Cg from "../data/Desktop-2.svg"
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
        src={Cg}
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
