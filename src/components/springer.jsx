import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const SpringerInfo = ({ data }) => {
  return (
    <Box sx={{ mt: 3 }}>
      {data.map((item, index) => {
        if (item.type === 'text') {
          return (
            <Typography key={index} variant="body1" component="span">
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
        if (item.type === 'image') {
          return (
            <Box
              key={index}
              component="img"
              src={item.src}
              alt={item.alt}
              sx={{ width: '100%', height: 'auto', mt: 2, borderRadius: 2 }}
            />
          );
        }
        return null;
      })}
    </Box>
  );
};

export default SpringerInfo;
