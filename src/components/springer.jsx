import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const SpringerInfo = ({ data }) => {
  return (
    <Box sx={{ mt: 3 , fontWeight: '900'}}>
      {data.map((item, index) => {
        if (item.type === 'text') {
          return (
            <Typography key={index} variant="body1" component="span"sx={{ fontWeight: 'bold' }}>
              {item.value}
            </Typography>
          );
        }
        if (item.type === 'link') {
          return (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener"
              sx={{ mx: 0.5 }}
            >
              {item.value}
            </Link>
          );
        }
        return null;
      })}
    </Box>
  );
};

export default SpringerInfo;
