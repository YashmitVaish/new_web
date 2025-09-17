import React from 'react';
import { Box } from '@mui/material';
import Cp from "../data/Desktop - 3.svg";
import Pt from "../data/Desktop - 1.png";

export default function Chief() {
  return (  
    <Box
      sx={{
        width: "100%",
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src={Cp}
        alt="Hero 1"
        sx={{
          width: '100%',
          height: 'auto',
          objectFit: "contain",
          objectPosition: 'center',
          display: 'block',
        }}
      />
      <Box
        component="img"
        src={Pt}
        alt="Hero 2"
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
